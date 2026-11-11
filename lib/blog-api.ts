export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  tags: string[];
  thumbnailUrl: string;
  slug: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
};

export type BlogPagination = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasMore: boolean;
};

export type PostsResult =
  | { success: true; posts: BlogPost[]; pagination: BlogPagination }
  | { success: false; error: string };

export type BlogArticle = {
  id: string;
  title: string;
  publishedDate: string;
  tags: string[];
  htmlContent: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  thumbnailUrl?: string;
  metadata?: { readingTime?: string; wordCount?: number; lastModified?: string };
};

function config() {
  return {
    base: (process.env.BLOG_API_URL ?? "").replace(/\/$/, ""),
    siteId: process.env.BLOG_SITE_ID ?? "",
    token: process.env.BLOG_API_TOKEN ?? "",
  };
}

export async function fetchPosts({
  page = 1,
  limit = 6,
  tag,
}: { page?: number; limit?: number; tag?: string } = {}): Promise<PostsResult | null> {
  const { base, siteId, token } = config();
  if (!base || !siteId) return null;
  const params = new URLSearchParams({
    siteId,
    page: String(page),
    limit: String(Math.min(20, Math.max(1, limit))),
  });
  if (tag) params.set("tag", tag);
  try {
    const res = await fetch(`${base}/api/blog/posts?${params.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });
    const data = await res.json().catch(() => null);
    if (!data) return null;
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || `HTTP ${res.status}` };
    }
    const posts: BlogPost[] = Array.isArray(data.posts) ? data.posts : [];
    const p = data.pagination ?? {};
    return {
      success: true,
      posts,
      pagination: {
        currentPage: Number(p.currentPage) || page,
        totalPages: Number(p.totalPages) || 1,
        totalCount: Number(p.totalCount) || 0,
        hasMore: Boolean(p.hasMore),
      },
    };
  } catch {
    return null;
  }
}

export async function fetchArticle(slug: string): Promise<BlogArticle | null> {
  const { base, siteId, token } = config();
  if (!base || !siteId || !slug) return null;
  const url = `${base}/api/blog/article?siteId=${encodeURIComponent(siteId)}&slug=${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.success || !data.article) return null;
    return data.article as BlogArticle;
  } catch {
    return null;
  }
}

/** 公開記事の slug を全件取得（sitemap 用）。失敗時は例外を投げる */
export async function fetchAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  for (;;) {
    const result = await fetchPosts({ page, limit: 20 });
    if (!result || !result.success) {
      if (page === 1) throw new Error("failed to fetch posts");
      break;
    }
    slugs.push(...result.posts.map((p) => p.slug));
    if (page >= result.pagination.totalPages || result.posts.length === 0) break;
    page += 1;
    if (page > 100) break;
  }
  return slugs;
}
