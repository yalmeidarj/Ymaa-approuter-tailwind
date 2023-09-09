import Script from "next/script";

type ServiceStructuredDataProps = {
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

export default function ServiceStructuredData({ data }: ServiceStructuredDataProps) {
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