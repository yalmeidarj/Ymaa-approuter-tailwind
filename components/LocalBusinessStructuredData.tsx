import Script from "next/script";

type LocalBusinessStructuredDataProps = {
    data: {
        "@context": string;
        "@type": string;
        name: string;
        legalName: string;
        alternateName?: string;
        url: string;
        mainEntityOfPage: {
            "@type": string;
            "@id": string;
        };
        logo: string;
        image: string;
        email: string;
        keywords: string;
        knowsLanguage: string;
        priceRange: string;
        address: {
            "@type": string;
            addressLocality: string;
            addressRegion: string;
            addressCountry: string;
        };
        telephone: string;
        openingHoursSpecification: {
            "@type": string;
            dayOfWeek: string[] | string;
            opens: string;
            closes: string;
        }[];
        serviceArea: {
            "@type": string;
            addressLocality: string;
            addressRegion: string;
            addressCountry: string;
        }[];
    };
}

export default function LocalBusinessStructuredData({ data }: LocalBusinessStructuredDataProps) {
    return (
        <Script
            strategy="afterInteractive"
            type="application/ld+json"
            key="structured-data"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}
