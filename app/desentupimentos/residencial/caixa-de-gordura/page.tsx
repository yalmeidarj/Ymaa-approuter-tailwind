import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';

type Props = {};

const DesentupimentoResidencialCaixaDeGordura: React.FC<Props> = () => {


    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        alternateName: "Ymaa Desentupidora", // Adicione um nome alternativo se desejar
        url: "https://www.ymaadesentupidora.com.br/",
        email: "contato@ymaadesentupidora.com.br",
        keywords: "Desentupidora 24h, desentupidora, desentupidora de esgoto, desentupidora de coluna, desentupidora de caixa-de-gordura, desentupidora rj",
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
            "@id": "https://www.ymaadesentupidora.com.br/desentupimento/residencial/caixa-de-gordura"
        }
    };

    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">

                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Serviços Residenciais de Desentupimento
                    </h1>

                    <p className="text-lg text-gray-dark leading-relaxed">
                        A <span className="font-bold text-ymaa-green">Ymaa Desentupidora</span> oferece soluções residenciais especializadas, abrangendo desde o desentupimento de esgotos até manutenção preventiva. Garantimos o conforto e bem-estar em seu lar, com serviços eficientes e técnicos especializados.
                    </p>

                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Desentupimento de Caixa de Gordura
                    </h2>

                    <p className="text-lg text-gray-dark leading-relaxed">
                        A caixa de gordura é fundamental para evitar o entupimento de esgotos e tubulações. Ela retém os resíduos e gorduras provenientes da cozinha, prevenindo obstruções. Nosso serviço de desentupimento de caixa de gordura visa a limpeza completa e adequada manutenção, garantindo o funcionamento perfeito e duradouro do seu sistema.
                    </p>

                </div>
            </div>
            <LocalBusinessStructuredData data={data} />
        </>
    );
};

export default DesentupimentoResidencialCaixaDeGordura;
