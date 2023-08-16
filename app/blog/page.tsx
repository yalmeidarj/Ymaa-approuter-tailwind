
import Link from 'next/link';
// import { meta } from '../../content/blogposts/desentupir-pia.mdx';
import matter from 'gray-matter';
// Constants
const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const AUTH_TOKEN = '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'; // Store your token securely in an env variable.

// Type Definitions
type RepoContent = {
    path: string;
    content?: string;
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
    const files = await data.map((file: any) => {
        const path = file.path.replace(/\.mdx$/, ''); // Remove the .mdx extension only at the end
        return {
            path: path,
        };
    });


    return await files;
}

export default async function Page() {

    const files = await getFilesFromRepo();

    // matter(<MyMdxComponent /> as String)

    return (
        <>
            <div className="max-w-screen-md mx-auto p-4 space-y-4 m-4">
                {files.map((repo) => (
                    <Link key={repo.path} href={`/blog/${repo.path.split(" ")[0]}`} className="text-blue-500 hover:underline m-4">
                        {repo.path}
                    </Link>
                ))}
            </div>

        </>
    );
}






