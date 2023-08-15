import { MDXRemote } from 'next-mdx-remote/rsc'
import nextBase64 from 'next-base64';
import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next'



const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const AUTH_TOKEN = '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';


type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    // Get the slug and content from the file system
    const slug = params.slug
    const data = await getPost(slug)

    // Decode the base64-encoded content and parse frontmatter
    const decoded = nextBase64.decode(data.content);
    const object = matter(decoded);

    return object.data
}

type Post = {
    content: string;
    data: Metadata;
}

async function getPost(slug: string): Promise<any> {
    const title = slug + '.mdx';
    try {
        const response = await fetch(`${GITHUB_API_CONTENTS}${title}`, {
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

export default async function Page({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const blogPost = await getPost(slug);
    const post = blogPost;

    const decoded = nextBase64.decode(post.content);
    const object = matter(decoded);


    return (
        <div className=" text-brown flex flex-col text-justify max-w-screen-md mx-auto p-4">
            <MDXRemote source={object.content} />
            <h1 className="text-2xl font-bold mb-4">Author: {object.data.author}</h1>
        </div>
    );
}

