import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';

const PiasVasosRalos: React.FC = () => {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        alternateName: "Ymaa Desentupidora",
        url: "https://www.ymaadesentupidora.com.br/",
        email: "contato@ymaadesentupidora.com.br",
        keywords: "Desentupidora, desentupimento de pias, desentupimento de vasos sanitários, desentupimento de ralos, desentupidora rj",
        knowsLanguage: "pt-BR",
        priceRange: "R$ - A consultar",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Rio de Janeiro",
            addressRegion: "RJ",
            addressCountry: "BR",
        },
        telephone: "+552132973588",
        openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
        }],
        logo: "/path/to/logo.jpg",
        image: "/path/to/image.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.ymaadesentupidora.com.br/desentupimentos/residencial/pias-vasos-sanitarios-ralos"
        }
    };

    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">

                    {/* Heading 1 */}
                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Desentupimento de Pias, Vasos Sanitários e Ralos
                    </h1>

                    {/* Paragraph 1 with improved contrast */}
                    <p className="text-gray-dark">
                        Pias, vasos sanitários e ralos entupidos podem causar grandes transtornos em uma residência. A <span className="font-bold text-ymaa-green">Ymaa Desentupidora</span> oferece serviços especializados para resolver esses problemas rapidamente, garantindo conforto e tranquilidade para você e sua família.
                    </p>

                    {/* Heading 2 */}
                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Soluções Eficientes e Rápidas
                    </h2>

                    {/* Paragraph 2 with improved contrast */}
                    <p className="text-gray-dark">
                        Com técnicas modernas e equipe capacitada, garantimos a solução de desentupimentos de pias, vasos e ralos com eficiência e rapidez. Evite transtornos e conte conosco para manter sua residência funcionando perfeitamente.
                    </p>
                </div>
            </div>
            <LocalBusinessStructuredData data={data} />
        </>
    );
};

export default PiasVasosRalos;

