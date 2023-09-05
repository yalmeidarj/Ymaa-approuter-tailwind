
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

