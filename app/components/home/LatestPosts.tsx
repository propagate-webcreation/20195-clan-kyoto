import Link from "next/link";
import { fetchPosts } from "@/lib/blog-api";
import { PostCard } from "../../blog/PostCard";

export async function LatestPosts() {
  const result = await fetchPosts({ limit: 3 });
  if (!result || !result.success || result.posts.length === 0) return null;
  return (
    <section id="journal" className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <span>Notes from the Studio</span>
          <span>—— Journal</span>
        </div>
        <div className="hairline" />
      </div>
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div>
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92]">
              JOURNAL<span className="text-[#c8102e]">.</span>
            </h2>
            <p className="text-white/55 text-sm mt-4">Latest notes from the studio</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-white text-white px-5 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors"
          >
            View all
            <span className="block w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-12">
          {result.posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
