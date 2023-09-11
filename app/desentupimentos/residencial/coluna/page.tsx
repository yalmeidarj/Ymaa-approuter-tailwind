import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData';

type Props = {};

const DesentupimentoResidencialColuna: React.FC<Props> = () => {


    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        alternateName: "Ymaa Desentupidora",
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
            "@id": "https://www.ymaadesentupidora.com.br/desentupimento/residencial/coluna"
        }
    };

    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">
                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Serviços Residenciais de Desentupimento de Coluna
                    </h1>

                    <p className="text-gray-dark">
                        A <span className="font-bold text-gray-dark">Ymaa Desentupidora</span> é especialista em desentupimento de colunas residenciais. Com técnicos treinados e equipamentos de ponta, garantimos a eliminação de bloqueios e a restauração do fluxo normal em suas colunas, assegurando a paz e segurança em seu lar.
                    </p>

                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Por que é essencial desentupir colunas?
                    </h2>

                    <p className="text-gray-dark">
                        As colunas são essenciais para o correto escoamento da água em residências. Quando entupidas, podem causar vazamentos, infiltrações e outros problemas estruturais. O desentupimento regular de colunas evita danos maiores e custos elevados com reparos no futuro.
                    </p>
                </div>
            </div>

            <LocalBusinessStructuredData data={localBusinessStructuredDataYmaa} />
        </>
    );
};

export default DesentupimentoResidencialColuna;
