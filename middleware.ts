import { NextResponse, type NextRequest } from "next/server";

// 2026-05-20: 顧客サイトを Vercel preview URL (= *.vercel.app) で配信したとき **だけ**
// noindex を返すランタイム判定。独自ドメインで配信されたら何もしない (= index 可能)。
// 設計詳細: propagate-ai の scripts/_apply_vercel_only_noindex.mjs ヘッダコメント参照。
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = req.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
