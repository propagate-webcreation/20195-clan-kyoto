import Link from "next/link";
import type { BlogPost } from "@/lib/blog-api";
import { formatBlogDate } from "@/lib/blog-format";

export function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <article className="group">
      <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161616]">
          {post.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.28em] uppercase text-white/35">
              No Image
            </div>
          )}
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase text-white/85 bg-black/50 px-2 py-1">
            — {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </Link>
      <div className="pt-5">
        <p className="text-[11px] tracking-[0.18em] text-white/50">
          {formatBlogDate(post.publishedDate)}
        </p>
        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
          <h3 className="font-jp text-white text-lg sm:text-xl leading-[1.5] font-bold mt-3 group-hover:text-[#c8102e] transition-colors">
            <span className="cms-text">{post.title}</span>
          </h3>
        </Link>
        {post.excerpt ? (
          <p className="cms-text font-jp text-white/60 text-sm leading-[1.8] mt-3 line-clamp-3">
            {post.excerpt}
          </p>
        ) : null}
        {post.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((t) => (
              <li key={t}>
                <Link
                  href={`/blog?tag=${encodeURIComponent(t)}`}
                  className="text-[11px] border border-white/25 px-2 py-1 text-white/70 hover:border-[#c8102e] hover:text-[#c8102e]"
                >
                  #{t}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
