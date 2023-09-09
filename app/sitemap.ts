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
    // { desentupimentos comerciais }
    {
      url: `${baseUrl}/desentupimentos/comercial/caixa-de-gordura`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/comercial/coluna`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/comercial/contrato-de-manutencao`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/comercial/manutencao-de-esgoto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/comercial/pias-vasos-sanitarios-ralos`,
      lastModified: new Date(),
    },
    // { desentupimentos residenciais }
    {
      url: `${baseUrl}/desentupimentos/residencial/caixa-de-gordura`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/residencial/coluna`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/residencial/esgoto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desentupimentos/residencial/pias-vasos-sanitarios-ralos`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    ...paths,
  ];
}
