import { MDXRemote } from 'next-mdx-remote/rsc'
import nextBase64 from 'next-base64';
import matter from 'gray-matter';

const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const AUTH_TOKEN = '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';

async function getPost(slug: string): Promise<any> {
    const title = slug;
    try {
        const response = await fetch(`${GITHUB_API_CONTENTS}${title}`, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`
            }
        });

        return response.json();

    } catch (error) {
        console.error(error);
    }
}

export default async function Page({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const blogPost = await getPost(slug);
    const post = matter(nextBase64.decode(blogPost.content));

    return (
        <div className=" text-brown flex flex-col text-justify max-w-screen-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Author: {post.data?.author}</h1>
            <MDXRemote source={post.content} />
        </div>
    );
}

