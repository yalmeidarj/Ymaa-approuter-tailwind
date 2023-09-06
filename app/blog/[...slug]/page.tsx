import { MDXRemote } from 'next-mdx-remote/rsc'
import nextBase64 from 'next-base64';
import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image';
import { metadata } from 'app/layout';
import { useMDXComponents } from 'mdx-components'
import { getPostBySlug } from 'utils/lib/getData';


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

    // // Decode the base64-encoded content and parse frontmatter
    // const decoded = nextBase64.decode(data.content);
    const object = matter(data.content);

    const metadata = {
        title: data.title,
        description: data.metaDescription,
        alternates: {
            canonical: `/${data.slug}`,
        },
        // verification: {
        //     google: "google-site-verifitation=G-S71FQWHZ8V",
        // },
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
                },
                // {
                //     url: 'https://nextjs.org/og-alt.png',
                //     width: 1800,
                //     height: 1600,
                //     alt: 'My custom alt',
                // },
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
                {/* <div className="prose"> */}

                <MDXRemote source={object.content} />
                {/* </div> */}
            </div>
            {/* <h1 className="text-2xl font-bold text-gray-dark w-full max-w-screen-md text-center">Author: {post.author.name}</h1> */}
        </div>
    );
}

