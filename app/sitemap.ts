import { getPosts } from "utils/lib/getData";

export default async function sitemap() {
  const baseUrl = "https://ymaadesentupidora.com.br";

  const posts = await getPosts();
  const paths = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
  }));
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/sobre`, lastModified: new Date() },
    { url: `${baseUrl}/desentupimentos`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    ...paths,
  ];
}
