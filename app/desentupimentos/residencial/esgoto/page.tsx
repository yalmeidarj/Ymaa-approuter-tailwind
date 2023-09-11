// components/DesentupimentoResidencialEsgoto.tsx
import React from 'react';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData';
import { Metadata } from 'next';


export const metadata: Metadata = {
    metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
    title: 'Desentupir esgoto com a Ymaa Desentupidora',
    description: 'Desentupimos seu esgoto residencial',
    alternates: {
        canonical: 'https://www.ymaadesentupidora.com.br/residencial/esgoto',
    },
}


export default function DesentupimentoResidencialEsgoto() {


    const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ymaa Desentupidora e reformas",
        "legalName": "Ymaa Desentupidora e reformas",
        "alternateName": "Ymaa Desentupidora", // Exemplo, pode alterar
        "url": "https://www.ymaadesentupidora.com.br/",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ymaadesentupidora.com.br/"
        },
        "logo": "URL_DO_LOGO_AQUI", // Substitua pelo URL real do logo
        "image": "URL_DA_IMAGEM_AQUI", // Substitua pelo URL real da imagem da empresa
        "email": "contato@ymaadesentupidora.com.br",
        "keywords": "Desentupidora 24h, desentupidora, desentupidora de esgoto, ...", // Complete com mais palavras-chave, se necessário
        "knowsLanguage": "pt",
        "priceRange": "$$", // Substitua pelos valores reais
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "addressCountry": "BR"
        },
        "telephone": "+552132973588",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], // Exemplo, ajuste conforme necessário
                "opens": "08:00",
                "closes": "18:00"
            },
            // Adicione mais se houver horários diferentes para diferentes dias
        ]
    };


    return (
        <div className="max-w-screen-md mx-auto p-4 space-y-4 m-4 bg-background text-brown">

            <LocalBusinessStructuredData data={localBusinessStructuredDataYmaa} />

            <h1 className="text-ymaa-green text-3xl font-semibold">
                Serviços Residenciais de Desentupimento
            </h1>

            <p className="text-md text-light-brown my-6">
                A Ymaa Desentupidora oferece soluções residenciais de alta qualidade, abrangendo desde o desentupimento de esgotos até manutenções preventivas. Estamos comprometidos em garantir o conforto e bem-estar em seu lar. Conte conosco para serviços rápidos, eficientes e profissionais no Rio de Janeiro.
            </p>

            <div className="bg-light-color p-4 rounded">
                <h2 className="text-ymaa-green text-2xl font-semibold mb-4">Desentupimento de Esgoto Residencial</h2>
                <p className="text-md text-light-brown">
                    O entupimento de esgoto residencial pode causar grandes inconvenientes e desconfortos para sua família. A Ymaa Desentupidora está pronta para atender e solucionar esses problemas de maneira ágil e eficaz. Nossos profissionais são treinados e equipados com ferramentas de ponta para assegurar um serviço de excelência.
                </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
                <a href="tel:+552132973588" className="bg-ymaa-green text-white p-3 rounded-full mb-3">
                    Clique para Ligar
                </a>
                <a href="mailto:contato@ymaadesentupidora.com.br" className="underline text-light-brown">
                    contato@ymaadesentupidora.com.br
                </a>
            </div>
        </div>
    );
}

function generateMetadata() {
    return {
        title: "Desentupidora 24h - Desentupimento de Esgoto Residencial - Ymaa Desentupidora RJ",
        description: "Especialistas em desentupimento de esgoto residencial no Rio de Janeiro. Garanta o bem-estar de seu lar com a Ymaa Desentupidora.",
        alternates: {
            canonical: `https://www.ymaadesentupidora.com.br/desentupimento/residencial/esgoto`,
        },
        openGraph: {
            title: "Desentupimento de Esgoto Residencial - Ymaa Desentupidora RJ",
            description: "Oferecemos soluções eficientes em desentupimento de esgoto residencial no Rio de Janeiro.",
            url: 'https://www.ymaadesentupidora.com.br/desentupimento/residencial/esgoto',
            siteName: 'Ymaa Desentupidora e reformas',
            locale: 'pt_BR',
            type: 'website',
        },
    };
}
