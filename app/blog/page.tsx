
import ArticleCard from 'components/ArticleCard';
import matter from 'gray-matter';
import nextBase64 from 'next-base64';
import Link from 'next/link';
import { getPosts } from 'utils/lib/getData';

export async function generateMetadata() {


    const metadata = {
        title: "Blog da Ymaa Desentupidora",
        description: "Tudo sobre desentupimento e reformas",
        alternates: {
            canonical: `/blog`,
        },
        verification: {
            google: "https://www.googletagmanager.com/gtag/js?id=G-7X7R3Z6XBB",
        },
        openGraph: {
            title: "Blog da Ymaa Desentupidora",
            description: "Tudo sobre desentupimento e reformas",
            url: 'https://www.ymaadesentupidora.com.br/',
            siteName: 'Ymaa Desentupidora e reformas',

            locale: 'pt_BR',
            type: 'website',
        },

    }

    return metadata
}



export default async function Page() {

    const files = await getPosts();

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






