import Script from "next/script";

type ArticleStructuredDataProps = {
    data: {
        "@context": string;
        "@type": string;
        "headline": string;
        "image": string[];
        "datePublished": undefined;
        "dateModified": undefined;
        "author": {
            "@type": string;
            "name": string;
        };
    };
}

export default function ArticleStructuredData({ data }: ArticleStructuredDataProps) {
    return (
        <Script
            strategy="afterInteractive"
            type="application/ld+json"
            key="structured-data"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({ data }),
            }}
        />
    );
}
