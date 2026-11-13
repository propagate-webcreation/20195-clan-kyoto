export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const BLOG_SITE_ORIGIN =
  process.env.SITE_ORIGIN || "https://kyoto-walkin-tattoo-studio.com";
