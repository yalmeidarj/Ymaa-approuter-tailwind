import { MDXRemote } from 'next-mdx-remote/rsc'
import nextBase64 from 'next-base64';
import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next'


const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const AUTH_TOKEN = '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';


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const title = params.slug
//     // fetch data
//             const response = fetch(`${GITHUB_API_CONTENTS}${title}`, {
//             headers: {
//                 'Authorization': `Bearer ${AUTH_TOKEN}`
//             }
//         });
//     const product = await fetch(`https://.../${id}`).then((res) => res.json())
//     // optionally access and extend (rather than replace) parent metadata
//     const previousImages = (await parent).openGraph?.images || []

//     return {
//         title: product.title,
//         openGraph: {
//             images: ['/some-specific-page-image.jpg', ...previousImages],
//         },
//     }
// }




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

