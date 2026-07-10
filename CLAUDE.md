# Project Conventions

詳細な美学ガイダンス (タイポグラフィ / ジャンプ率 / レイアウトパターン /
AI slop 回避等) は `.claude/skills/frontend-design/SKILL.md` が真実ソース。
本 CLAUDE.md は横断ルールの最小まとめ。

## 画像生成
- すべての画像は `mcp__webcreate_image_gen__generate_image` で生成すること。例外なし。
- Canvas/SVG/グラデーション塗りつぶし等によるプレースホルダー画像の自前生成は禁止。
- コンポーネント実装前に画像を生成し、`public/images/` に保存してから参照する。

## デザイン品質
- `next/font/google` で個性的なフォントペアリングを選択する。Inter/Roboto/Arial は使用禁止。
- 案件の業種に合った大胆なカラーパレットを設計する。紫 on 白のデフォルト配色は禁止。
- セクションごとに背景色・レイアウト・タイポグラフィで視覚的差別化を行う。
- 数字は lining figures を使う (oldstyle figures 禁止)。Cormorant Garamond / Playfair
  Display / EB Garamond / Lora 等を採用する場合は `font-variant-numeric:
  lining-nums tabular-nums` を CSS に必ず指定する (globals.css 全体適用推奨)。
- その他詳細 (フォントペアリング候補 / tracking / jump ratio 等) は SKILL.md 参照。

## ファイル構造
- コンポーネント: `app/components/{page}/{Section}.tsx`
- ページ: `app/**/page.tsx` (組み立てのみ、詳細 JSX はコンポーネント側)
- 画像: `public/images/`

## ビルド
- 完了前に必ず `npm run build` を実行し、エラーをすべて修正すること。
