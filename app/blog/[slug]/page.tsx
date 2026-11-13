// ISR: 60秒ごとに再生成。記事更新後、最大60秒で反映される。
export const revalidate = 60;
export const dynamicParams = true;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchArticle } from "@/lib/blog-api";
import { BLOG_SITE_ORIGIN, formatBlogDate } from "@/lib/blog-format";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) return {};
  const title = article.metaTitle || article.title;
  const description =
    article.metaDescription ||
    article.htmlContent.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
  const images = article.thumbnailUrl ? [article.thumbnailUrl] : undefined;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.metadata?.lastModified,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.publishedDate,
    dateModified: article.metadata?.lastModified || article.publishedDate,
    author: undefined,
    image: article.thumbnailUrl || undefined,
    mainEntityOfPage: `${BLOG_SITE_ORIGIN}/blog/${encodeURIComponent(slug)}`,
  };

  return (
    <div className="bg-[#0a0a0a] px-4 md:px-6 pt-32 sm:pt-40 pb-20 md:pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="cms-article mx-auto max-w-[860px] bg-white text-[#2B2E35] px-5 md:px-12 py-10 md:py-14">
        <Link href="/blog" className="text-[11px] tracking-[0.22em] uppercase text-[#6B6F78] hover:text-[#9e0c24]">
          ← Journal
        </Link>
        <h1 className="cms-text font-jp text-[#111318] text-[24px] md:text-[34px] font-bold leading-[1.45] mt-6">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#6B6F78] font-jp">
          <time dateTime={article.publishedDate}>{formatBlogDate(article.publishedDate)}</time>
          {article.metadata?.readingTime ? (
            <span>
              {/^\d+/.test(article.metadata.readingTime)
                ? `${article.metadata.readingTime.match(/\d+/)?.[0]} min read`
                : article.metadata.readingTime}
            </span>
          ) : null}
        </div>
        {article.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((t) => (
              <li key={t}>
                <Link
                  href={`/blog?tag=${encodeURIComponent(t)}`}
                  className="text-[12px] border border-[#E3E4E8] px-2 py-1 text-[#2B2E35] hover:border-[#9e0c24] hover:text-[#9e0c24]"
                >
                  #{t}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <hr className="border-[#E3E4E8] my-8" />
        <div className="cms-body blog-content" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
        <hr className="border-[#E3E4E8] my-10" />
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border border-[#111318] text-[#111318] px-5 py-3 text-[12px] tracking-[0.18em] hover:bg-[#111318] hover:text-white transition-colors font-jp"
        >
          Back to journal
        </Link>
      </article>
    </div>
  );
}
