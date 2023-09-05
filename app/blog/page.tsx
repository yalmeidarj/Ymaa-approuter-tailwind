
import ArticleCard from 'components/ArticleCard';
import matter from 'gray-matter';
import nextBase64 from 'next-base64';
import Link from 'next/link';

// Constants
// const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const GITHUB_API_CONTENTS = "https://ymaa-blog-4d92799313d4.herokuapp.com/posts";
const AUTH_TOKEN = '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'; // Store your token securely in an env variable.

// Type Definitions

type Image = [{
    url: string,
    alt: string,
    title: null,
}];

type RepoContent = {
    title: string;
    metaDescription?: string;
    slug: string;
    images: Image;
};

async function getFilesFromRepo(): Promise<RepoContent[]> {
    const response = await fetch(GITHUB_API_CONTENTS, {
        // // cache: 'no-store',
        // next: {
        //     tags: ['a']
        // },
        // headers: {
        //     'Authorization': `Bearer ${AUTH_TOKEN}`
        // }
    });
    // revalidateTag('a');
    // if (!response.ok) {
    //     throw new Error('Failed to fetch data from GitHub');
    // }

    const data = await response.json();
    // const files = await data.map((file: any) => {
    //     const path = file.path.replace(/\.mdx$/, ''); // Remove the .mdx extension only at the end
    //     return {
    //         content: file,
    //         path: path,
    //     };
    // });


    return await data;
}

export default async function Page() {

    const files = await getFilesFromRepo();

    // matter(<MyMdxComponent /> as String)

    // const image = files[0].images[0].url;

    return (
        <>
            <div className="max-w-screen-md mx-auto p-4 space-y-4 m-4">
                {files.map((repo) => (
                    <ArticleCard ImageUrl={repo.images[0]} title={repo.title} description={repo.metaDescription || 'd'} link={`/blog/${repo.slug}`} />

                ))}
            </div>

        </>
    );
}






