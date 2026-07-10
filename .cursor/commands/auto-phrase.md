# /auto-phrase — 既存サイトの改行最適化

既存サイトの**見出し（h2〜h6）**に `text-wrap: balance` + `word-break: auto-phrase` を導入し、
不要な `<br>` タグ・禁止プロパティを一括除去するコマンド。

> **本文（p, li）には `text-wrap` を一切適用しません。**
> iOS Safari（WebKit）の `text-wrap: pretty` は孤立語回避のために手前の行を意図的に縮め、
> 和文では右側に大きな余白を作ってガタつかせます。
> PC DevTools のモバイルエミュレーション（Chromium）では再現せず、**iPhone 実機でしか発症しない**ため、
> 本文の改行最適化は CSS では行わず、必要な箇所だけ `<br className="md:hidden" />` で個別調整します。

---

## 実行手順

### STEP 0 — 事前チェック（既存 CSS の汚染確認）

`globals.css` に過去の設定が残っていないか確認する。

```bash
rg 'text-wrap:\s*pretty|p,\s*li\s*\{' app/globals.css src/app/globals.css 2>/dev/null
```

| ヒットした内容 | 対応 |
|---|---|
| `p, li { text-wrap: pretty }` | **削除**（iOS Safari で右余白がガタつくため） |
| 個別要素への `[text-wrap:pretty]` | **削除**（同上） |
| `text-wrap: balance` が h2〜h6 以外に当たっている | h2〜h6 のみに限定 |

`setup.mjs` も該当箇所を検知して警告を出すが、目視でも確認しておく。

### STEP 1 — セットアップ（CSS追加 + lang="ja" 設定）

```bash
node .cursor/skills/text-wrap-cleanup/scripts/setup.mjs
```

dry-run で変更内容を確認。問題なければ:

```bash
node .cursor/skills/text-wrap-cleanup/scripts/setup.mjs --apply
```

**やること:**
- `globals.css` に以下を追加（未設定の場合）
  ```css
  h1 { text-wrap: wrap; word-break: normal; }
  h2, h3, h4, h5, h6 { text-wrap: balance; word-break: auto-phrase; }
  ```
  - **h1 は対象外**（キャッチコピーで意図しない改行を避けるため通常折り返し）
  - **auto-phrase は h2〜h6 のみ**
  - **p, li（本文）には何も適用しない**（iOS Safari の `text-wrap: pretty` 不具合回避）
- `layout.tsx` の `<html>` に `lang="ja"` を設定（`lang="en"` なら書き換え、なければ追加）
- すでに `p, li { text-wrap: pretty }` が残っていれば警告を出す

### STEP 2 — クリーンアップ（不要な `<br>` ・禁止プロパティ除去）

```bash
node .cursor/skills/text-wrap-cleanup/scripts/cleanup.mjs
```

dry-run で除去対象を確認。問題なければ:

```bash
node .cursor/skills/text-wrap-cleanup/scripts/cleanup.mjs --apply
```

### STEP 3 — 警告・要確認リストの対応

cleanup スクリプトが出力する以下の項目を対応する:

| レポート区分 | 対応方法 |
|-------------|---------|
| **⚠ `<div>` に本文テキスト** | `<div>` を `<p>` に変更（本文タグを正しく使う）。**`[text-wrap:pretty]` の付与は禁止**（iOS Safari でガタつく） |
| **⚠ Flex 子に min-w-0 なし** | テキストを含む Flex 子に `min-w-0` を手動で追加 |
| **⚠ 短い `<span>` がテキストを分断** | className なしの span → 除去してテキストを連結 |
| **💡 短い styled `<span>`** | スタイル目的なら OK。不要なら除去 |
| **🔴 globals.css に unlayered 要素セレクタ** | 削除するか `@layer base { ... }` の中に移動（Tailwind を上書きしている） |
| **要確認 (nowrap)** | ナビ・ボタン等の1行テキストなら残す。見出し・本文なら除去 |

### STEP 4 — iPhone 実機での目視確認（必須）

**PC DevTools のモバイルエミュレーションでは iOS Safari 特有の挙動を再現できない。**
必ず以下のいずれかで確認する:

1. **同一ネットワーク上の iPhone Safari でアクセス**（`npm run dev` のローカル IP）
2. Vercel プレビュー等のステージング URL を iPhone で開く
3. 実機が用意できなければ、最低でも Safari Technology Preview / macOS Safari の「レスポンシブモード」で確認

**チェック観点:**

| 観点 | NG の例 |
|------|---------|
| 本文の右側に大きな空白がガタつく | `text-wrap: pretty` がどこかに残っている |
| 見出しが想定より細かく改行される | `whitespace-nowrap` 周りの干渉、または親に `min-w-0` 不足 |
| 1文字だけ次行にこぼれる | 文の途中に不要な `<span>` がある（auto-phrase が文節認識できない） |
| ナビが1行に収まらない | ナビリンクの `whitespace-nowrap` が外されている |

---

## 個別調整パターン（auto-phrase でも揃わないとき）

### 1. SP のみ任意位置で改行したい

```tsx
// SP では「、」の後で改行、PC は1行
<h2>
  ゼロ距離の共生体験と、<br className="md:hidden" />森の食卓。
</h2>
```

| クラス | 効果 |
|---|---|
| `<br className="md:hidden" />` | SP のみ改行（PC では消える） |
| `<br className="hidden md:inline" />` | PC のみ改行（SP では消える） |
| `<br />`（素のまま） | SP/PC 両方で改行 — h1 のキャッチコピー以外は基本使わない |

### 2. SectionHeader 等のコンポーネントが `title: string` を受け取っている

`<br>` を埋め込みたい場合は型を `ReactNode` に拡張する。

```tsx
// ❌ string 固定だと <br> を入れられない
type Props = { title: string };

// ✅ ReactNode に拡張
import type { ReactNode } from "react";
type Props = { title: string | ReactNode };
```

呼び出し側はフラグメントで JSX を渡す:

```tsx
<SectionHeader
  title={
    <>
      看板犬たちと<br className="md:hidden" />カフェの日常。
    </>
  }
/>
```

### 3. Flex 子の中で本文の幅が縮まらない

```tsx
// ❌ Flex 子の min-width: auto がテキスト折り返しを阻害
<div className="flex gap-4">
  <div className="flex-1">
    <p>長いテキスト...</p>
  </div>
</div>

// ✅ min-w-0 を Flex 子に追加
<div className="flex gap-4">
  <div className="flex-1 min-w-0">
    <p>長いテキスト...</p>
  </div>
</div>
```

### 4. 文章ブロックが `<div>` のままで改行が不自然

`<div>` ではなく `<p>` / `<li>` で書く。`[text-wrap:pretty]` の付与は禁止（iOS でガタつく）。

```tsx
// ❌ 文章ブロックが div
<div>お客様の声をご紹介します。長い文章...</div>

// ✅ p に変更
<p>お客様の声をご紹介します。長い文章...</p>
```

---

## ワンライナー（慣れたら）

```bash
node .cursor/skills/text-wrap-cleanup/scripts/setup.mjs --apply && node .cursor/skills/text-wrap-cleanup/scripts/cleanup.mjs --apply
```

## 実行後の確認（任意）

```
/review quick
```

`text-wrap` + `overflow` のスクショチェックで見切れがないか確認できる。
ただし**スクショは Chromium 系で撮影するため iOS Safari 特有の余白問題は検出できない**。
最終チェックは必ず STEP 4 の **iPhone 実機目視** で行うこと。

---

## 設計の根拠（よくある誤解）

| 誤解 | 実際 |
|---|---|
| 「auto-phrase が本文にも当たって改行が崩れている」 | auto-phrase は **h2〜h6 のみ**。本文の崩れは **`text-wrap: pretty`**（別プロパティ）が原因 |
| 「PC DevTools で問題なければ OK」 | `text-wrap: pretty` の右余白問題は **iPhone 実機 Safari でしか発症しない** |
| 「本文も pretty を入れた方が孤立文字を防げる」 | Chromium ではそうだが、WebKit では逆効果。プロジェクト方針として**本文には適用しない** |
| 「div でも `[text-wrap:pretty]` を付ければ同じ」 | iOS で同じ症状が出るので**禁止**。文章ブロックは `<p>` に変更する |
