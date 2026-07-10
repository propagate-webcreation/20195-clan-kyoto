# /preview-before-annotator — Annotator自動修正の直前コミットをプレビュー

FixAnnotator の自動修正コミット（`fix: annotator修正指示による自動修正 (record=xxxxx)`）の **1つ前** のコミットを、
**メイン作業ツリーを一切触らずに** 別の worktree で取り出し、別ポートでプレビュー起動する。

「自動修正される前の状態」と「現在の状態」を見比べたいときに使う。

## 使用方法

```
/preview-before-annotator              ← 履歴の最新の自動修正コミットの直前を対象にする
/preview-before-annotator record=17314 ← 特定 record の自動修正コミットの直前を対象にする
```

## 設計の前提

- メインの作業ツリー（現在のブランチ・HEAD）は **絶対に変更しない**
- 比較・並列プレビューのため `git worktree` を使い、detached HEAD で対象コミットを取り出す
- worktree のパスはメインリポジトリの **親ディレクトリに `<repo-basename>-preview-before-annotator-fix`**
- ポートは **3000 から順に空きポートを探して** 自動採番する（複数案件を同時に動かしている場合でも競合しない）

## 処理フロー

### STEP 1 — 事前チェック

1. カレントが git リポジトリ内か確認

   ```bash
   git rev-parse --show-toplevel
   ```

2. 未コミット変更があれば `git status` を表示し、ユーザーに stash / commit を促す
   （worktree add は通常通るが、念のため警告する）

### STEP 2 — Annotator 修正コミット（BAD）の特定

直近 200 件のコミットから、コミットメッセージが正規表現
`^fix:\s*annotator修正指示による自動修正\s*\(record=\d+\)\s*$` に一致するものを検索する。

```bash
git log --oneline -n 200 --grep='^fix: annotator修正指示による自動修正 (record=[0-9]\+)$' -E
```

`record=xxxxx` 指定がある場合は、その record と一致する最新のコミットを選ぶ。

```bash
git log --oneline -n 200 --grep='^fix: annotator修正指示による自動修正 (record=17314)$' -E
```

#### ヒット件数別の挙動

| 件数 | 挙動 |
|------|------|
| 0件 | 「パターンに合うコミットがありません」と表示して終了 |
| 1件 | そのコミットを BAD として採用 |
| 複数件 | **履歴の最新1件**を BAD として採用（指示書の既定方針） |

### STEP 3 — 直前コミット（GOOD）の取得

`BAD` の **第一親** を `GOOD` とする。

```bash
GOOD_SHA=$(git rev-parse "${BAD_SHA}^")
```

両 SHA とフルメッセージ（1行）を取得して後で報告に使う。

```bash
git log -1 --format='%h %s' "${BAD_SHA}"
git log -1 --format='%h %s' "${GOOD_SHA}"
```

### STEP 4 — worktree の作成または更新

#### 4-1. パスの決定

```bash
REPO_ROOT=$(git rev-parse --show-toplevel)
REPO_BASENAME=$(basename "${REPO_ROOT}")
WORKTREE_PATH="$(dirname "${REPO_ROOT}")/${REPO_BASENAME}-preview-before-annotator-fix"
```

#### 4-2. 既存 worktree の確認

```bash
git worktree list --porcelain
```

| 状態 | 対応 |
|------|------|
| 目的パスが未登録 | `git worktree add --detach "${WORKTREE_PATH}" "${GOOD_SHA}"` |
| 目的パスが登録済み + GOOD と同じ HEAD | そのまま再利用（再 checkout 不要） |
| 目的パスが登録済み + 別コミット | worktree 内で `git checkout --detach "${GOOD_SHA}"` で更新（**方針A**を採用） |

### STEP 5 — プレビューサーバー起動

#### 5-1. 依存関係の確認

worktree 内に `node_modules` があるか確認する。なければユーザーに確認した上でインストールする。

```bash
cd "${WORKTREE_PATH}"
[ -d node_modules ] || npm install
```

#### 5-2. 空きポートの自動採番

複数案件を同時に開いている場合に競合しないよう、**3000 番から順に空きポートを探す**。
`lsof -i :<port>` の結果が空であれば未使用と判定する。

```bash
PREVIEW_PORT=3000
while lsof -i :"${PREVIEW_PORT}" >/dev/null 2>&1; do
  PREVIEW_PORT=$((PREVIEW_PORT + 1))
done
echo "使用ポート: ${PREVIEW_PORT}"
```

環境変数 `PREVIEW_PORT` が指定されていればそれを優先する（その場合も `lsof` で空きを確認し、埋まっていれば自動でずらす）。

#### 5-3. dev サーバー起動

採番したポートで dev サーバーを起動する。

```bash
cd "${WORKTREE_PATH}"
npm run dev -- -p "${PREVIEW_PORT}"
```

バックグラウンドで起動し、起動ログが `Ready` または `Local:` を含むまで待機する。

### STEP 6 — ユーザーへの報告

以下のフォーマットでまとめて報告する。

```
✅ Annotator 修正前の状態をプレビュー起動しました

【対象コミット】
BAD  (Annotator自動修正)   : {短SHA} {メッセージ}
GOOD (その直前 = プレビュー対象): {短SHA} {メッセージ}

【worktree パス】
{WORKTREE_PATH の絶対パス}

【プレビュー URL】
http://localhost:{採番されたポート}

【メイン側】
現在のブランチ・HEAD は一切変更していません。
他案件の dev サーバーとも競合しないよう、空きポートを自動で割り当てています。

【終了方法】
- dev サーバー停止: 起動ターミナルで Ctrl+C
- worktree 削除: git worktree remove "{WORKTREE_PATH}"
```

## 禁止・注意事項

- **メイン worktree で `git checkout` を実行しない**（ユーザーの作業ブランチを動かさない）
- worktree 以外で履歴を切り替えない（比較目的のため）
- `git worktree add` が失敗した場合は、未コミット変更や既存 worktree の状態を再確認してからリトライする
- 「コミットがない / git ではない / worktree 作成失敗」の場合は、**成功と誤認しないメッセージ**で必ず明示する

## パラメータ拡張

- `record=12345` — そのレコードIDと一致する最新の Annotator 修正コミットを対象にする
- 履歴探索深さは既定 200 件（必要なら調整）
- ポートは 3000 から順に空きを自動採番（環境変数 `PREVIEW_PORT` で起点を指定可能。埋まっていれば自動でずらす）
