const GITHUB_API_CONTENTS =
  "https://ymaa-blog-4d92799313d4.herokuapp.com/posts";
const AUTH_TOKEN = "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"; // Store your token securely in an env variable.

// Type Definitions

type Image = [
  {
    url: string;
    alt: string;
    title: null;
  }
];

type PostsContent = {
  title: string;
  metaDescription?: string;
  updatedAt: string;
  slug: string;
  images: Image;
};
export async function getPosts(): Promise<PostsContent[]> {
  const response = await fetch(GITHUB_API_CONTENTS, {
    // // cache: 'no-store',
    // next: {
    //     tags: ['a']
    // },
    // headers: {
    //     'Authorization': `Bearer ${AUTH_TOKEN}`
    // }
  });
  const data = await response.json();

  return await data;
}
export const localBusinessStructuredDataYmaa = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Ymaa Desentupidora e Reformas",
  legalName: "Ymaa Desentupidora e Reformas",
  alternateName: "Ymaa Desentupidora",
  url: "https://www.ymaadesentupidora.com.br/",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.ymaadesentupidora.com.br/",
  },
  logo: "http://placehold.it/512",
  image: "https://ymaa.blob.core.windows.net/newcontainer/Logo-light.png",
  email: "contato@ymaadesentupidora.com.br",
  keywords:
    "Desentupidora de esgoto, desentupidora no rj, desentupidora rio de janeiro, desentupidora, desentupimento, desentupir, desentupidora de caixa-de-gordura, desentupidora 24h, desentupidora 24 horas rj, desentupidora 24h rj, desentupidora rj, desentupidora rio, desentupidora de coluna",
  knowsLanguage: "pt-BR",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  telephone: "+552132973588",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "00:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  serviceArea: [
    {
      "@type": "postalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "Brazil",
    },
  ],
};

//   return await localBusinessStructuredData;
// }

export async function getPostBySlug(slug: string): Promise<any> {
  // const title = slug + '.mdx';
  try {
    const response = await fetch(`${GITHUB_API_CONTENTS}${slug}`, {
      // cache: 'no-cache',
      // headers: {
      //     'Authorization': `Bearer ${AUTH_TOKEN}`
      // }
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
