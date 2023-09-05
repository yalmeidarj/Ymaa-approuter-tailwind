import { ImageResponse } from "next/server";
import { getPostBySlug } from "utils/lib/getData";


export const size = {
    width: 900,
    height: 450,
};

export const contentType = 'image/png';

interface Props {
    params: { slug: string; };
}

export default async function og({ params }: Props) {
    const post = await getPostBySlug(params.slug);

    return new ImageResponse((
        <div className="relative flex items-center justify-center">
            <img src={post.images.url} alt={post.images.alt} />
            <div className="absolute flex bg-black opacity-50 inset-0" />
            <div className="absolute flex items-center top-2 w-full">
                <p className="text-white text-4x-l flex font-bold m-5">{post.title}</p>
                <p className="text-indigo-200 text-4x-l flex font-bold m-5">{post.author.name}</p>
                {/* <p className="">{post}</p> */}
            </div>
        </div>
    ))
}