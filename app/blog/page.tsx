// ISR: 60秒ごとに再生成。記事更新後、最大60秒で反映される。
export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPosts } from "@/lib/blog-api";
import { PostCard } from "./PostCard";

type SP = Promise<{ page?: string; tag?: string }>;

function pageHref(page: number, tag?: string): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (tag) params.set("tag", tag);
  const qs = params.toString();
  return qs ? `/blog?${qs}` : "/blog";
}

export async function generateMetadata({ searchParams }: { searchParams: SP }): Promise<Metadata> {
  const { tag } = await searchParams;
  return { title: tag ? `${tag} の記事一覧` : "ブログ" };
}

export default async function BlogIndexPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const page = Math.max(1, Math.floor(Number(sp.page)) || 1);
  const tag = sp.tag || undefined;

  const result = await fetchPosts({ page, tag });
  if (page > 1 && (!result || !result.success || result.posts.length === 0)) {
    notFound();
  }

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen">
      <div className="site-width pt-36 sm:pt-44 pb-24 sm:pb-32">
        <p className="eyebrow text-[#c8102e] mb-6">— Notes from the Studio</p>
        <h1 className="display text-[clamp(3rem,10vw,9rem)] leading-[0.9]">
          JOURNAL<span className="text-[#c8102e]">.</span>
        </h1>
        <p className="font-jp text-white/60 text-sm mt-6 tracking-[0.04em]">
          スタジオからのお知らせ・タトゥーカルチャーの読みもの。
        </p>
        {tag ? (
          <p className="font-jp mt-8 text-sm">
            <span className="text-[#c8102e]">#{tag}</span> の記事一覧
            <Link href="/blog" className="ml-4 text-white/55 border-b border-white/25 hover:text-white">
              絞り込みを解除
            </Link>
          </p>
        ) : null}
        <div className="hairline mt-12 mb-14" />

        {!result ? (
          <p className="font-jp text-white/70">記事の読み込みに失敗しました</p>
        ) : !result.success ? (
          <p className="font-jp text-white/70">記事の読み込みに失敗しました（{result.error}）</p>
        ) : result.posts.length === 0 ? (
          <p className="font-jp text-white/70">記事がありません</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {result.posts.map((post, i) => (
                <PostCard key={post.id} post={post} index={(page - 1) * 6 + i} />
              ))}
            </div>
            {result.pagination.totalPages > 1 && (
              <nav aria-label="ページ送り" className="mt-20 flex items-center justify-center gap-8 text-[12px] tracking-[0.2em] uppercase">
                {page > 1 ? (
                  <Link href={pageHref(page - 1, tag)} className="border border-white/40 px-5 py-3 hover:bg-white hover:text-black transition-colors">
                    ← 前へ
                  </Link>
                ) : null}
                <span className="tabular text-white/70">
                  {result.pagination.currentPage} / {result.pagination.totalPages}
                </span>
                {page < result.pagination.totalPages ? (
                  <Link href={pageHref(page + 1, tag)} className="border border-white/40 px-5 py-3 hover:bg-white hover:text-black transition-colors">
                    次へ →
                  </Link>
                ) : null}
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
