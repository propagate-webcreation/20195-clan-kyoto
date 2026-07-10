# プロジェクト同梱スキル

クリエイティブチェック用の **SKILL.md** と Playwright 用 **`.mjs`** をこのリポジトリ内に置いている。
グローバルの `~/.cursor/skills/` は不要。エージェントは各フォルダの `SKILL.md` を読んで手順に従う。

## スキル一覧（2つのみ）

| フォルダ | 用途 | トリガー | 実行タイミング |
|----------|------|---------|-------------|
| `director-visual/` | ディレクターレビュー全体 + PCビュー改行調整 | 「レビューして」「チェックして」「確認して」 | **通常のレビュー依頼で実行** |
| `sp-responsive/` | SP（375px）改行最適化 | 「スマホ最適化して」「SP改行調整して」「レスポンシブ対応して」 | **明示的指示があった場合のみ実行** |

### 担当範囲

```
director-visual:
  コード監査（フォントサイズ、禁止クラス、ボタン、セクション構造 等）
  SP ビジュアルレビュー（レイアウト、サイズ、配色 ※改行修正はしない）
  PC ビジュアルレビュー + PC改行調整（text-balance、カード揃え 等）
  SP非破壊検証（PC改行修正がSPに影響していないか）

sp-responsive:
  SP 改行品質レビュー（375px セクション単位）
  SP 改行修正（md:hidden パターン等）
  PC 非破壊検証（SP改行修正がPCに影響していないか）
```

## キャプチャスクリプト

両スキルが共有する **`capture-sections.mjs`**（`director-visual/scripts/` に配置）で
セクション単位のスクリーンショットを撮影する。

```bash
# SP + PC 両方（デフォルト）
node .cursor/skills/director-visual/scripts/capture-sections.mjs

# SP のみ
CAPTURE_VIEWPORTS=sp node .cursor/skills/director-visual/scripts/capture-sections.mjs

# PC のみ
CAPTURE_VIEWPORTS=pc node .cursor/skills/director-visual/scripts/capture-sections.mjs

# 特定ページのみ
PREVIEW_ROUTES="/,/about" node .cursor/skills/director-visual/scripts/capture-sections.mjs

# ポート指定
PREVIEW_BASE_URL=http://127.0.0.1:4000 node .cursor/skills/director-visual/scripts/capture-sections.mjs
```

### 出力構造

```
.cache/visual-review/
  sp/
    home/
      00-fullpage.png    ← ページ全体（概観用）
      01-header.png      ← ヘッダー単体
      02-hero.png        ← ヒーローセクション
      03-service.png     ← サービスセクション
      ...
  pc/
    home/
      00-fullpage.png
      01-header.png
      ...
  manifest.json          ← 全キャプチャの一覧とメタ情報
```

ポートは自動検出される（`lsof` で Node.js のリッスンポートを探索）。
`npm run dev` が起動していれば `PREVIEW_BASE_URL` の指定は不要。
