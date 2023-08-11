// import { MDXRemote } from 'next-mdx-remote/rsc';
import nextBase64 from 'next-base64';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';

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

    return await response.json();
}

export default async function Page() {

    const files = await getFilesFromRepo();

    return (
        <div className="max-w-screen-md mx-auto p-4 space-y-4">
            {files.map((repo) => (
                <Link key={repo.path} href={`/blog/${repo.path}`} className="text-blue-500 hover:underline">
                    {repo.path}
                </Link>
            ))}
        </div>
    );
}





