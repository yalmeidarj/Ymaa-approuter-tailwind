import Link from "next/link";
import img from '/public/desentupimento-de-bueiro-externo.png'
import Image from "next/image";

type Image = {
    url: string,
    alt: string,
    title: null,
};

interface ArticleCardProps {
    title: string;
    description: string;
    link: string;
    ImageUrl: Image;
}

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`


const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, link, ImageUrl }) => {
    // split link to get the slug
    const slug = link.split(".")[0];
    const img = ImageUrl.url;
    return (
        <div className="blog-card rounded-lg p-4 shadow-md hover:shadow-xl text-black">
            <Link href={slug}>
                <Image
                    src={img}
                    alt={title}
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full rounded-lg object-cover mb-4 shadow-md max-w-screen-md"
                    placeholder="blur"
                    blurDataURL={rgbDataURL(87, 120, 48)}
                />
                <h2 className="blog-card-title font-bold text-xl mt-4">{title}</h2>
                <p className="blog-card-description mt-2 truncate ...">{description}</p>
                {/* <a href={slug} className="read-more mt-4 block text-right">Read More →</a> */}
            </Link>
        </div>

    );
}

export default ArticleCard;