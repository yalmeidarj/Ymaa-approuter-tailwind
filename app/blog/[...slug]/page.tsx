import { MDXRemote } from 'next-mdx-remote/rsc'
import nextBase64 from 'next-base64';
import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image';
import { metadata } from 'app/layout';
import { useMDXComponents } from 'mdx-components'
import { getPostBySlug } from 'utils/lib/getData';
import ArticleStructuredData from 'components/ArticleStructuredData';


// const GITHUB_API_CONTENTS = "https://api.github.com/repos/yalmeidarj/YmaaBlogPosts/contents/";
const GITHUB_API_CONTENTS = "https://ymaa-blog-4d92799313d4.herokuapp.com/posts/";
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
    const object = matter(data.content);

    const metadata = {
        title: data.title,
        description: data.metaDescription,
        alternates: {
            canonical: `https://www.ymaadesentupidora.com.br/${data.slug}`,
        },
        openGraph: {
            title: data.title,
            description: data.metaDescription,
            url: 'https://www.ymaadesentupidora.com.br/',
            siteName: 'Ymaa Desentupidora e reformas',
            images: [
                {
                    url: data.images[0].url,
                    width: 800,
                    height: 600,
                    alt: data.images[0].alt
                }
            ],
            locale: 'pt_BR',
            type: 'article',
        },
    }

    return metadata
}

type Post = {
    content: string;
    author: Metadata;

}

async function getPost(slug: string): Promise<any> {
    
    try {
        const response = await fetch(`${GITHUB_API_CONTENTS}${slug}`, {
            cache: 'no-cache',
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

    // const decoded = nextBase64.decode(post.content);
    const object = matter(post.content);


    return (
        <>
            <ArticleStructuredData data={
                {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": blogPost.title,
                    "image": [
                        blogPost.images[0].url,
                    ],
                    "datePublished": blogPost.createdAt,
                    "dateModified": blogPost.updatedAt,
                    "author": {
                        "@type": "Person",
                        "name": blogPost.author.name,
                    },
                }
            } />
            <div className="flex flex-col items-center p-4 bg-background text-black">
                {/* The image will take full width on mobile and adapt on larger screens */}
                <Image
                    src={blogPost.images[0].url}
                    alt={blogPost.images[0].alt}
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full rounded-lg object-cover mb-4 shadow-md max-w-screen-md"
                />
                <p className="text-sm text-gray-dark mb-4 w-full max-w-screen-md text-center">By {post?.author?.name} | Last Update: </p>
                {/* Content is centered and has a maximum width for larger screens */}
                <div className="text-justify max-w-screen-md w-full mb-4">
                    <MDXRemote source={object.content} />
                </div>
            </div>
        </>
    );
}

