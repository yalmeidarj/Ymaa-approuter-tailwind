import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData';

const DesentupimentoComercialManutencaoEsgoto: React.FC = () => {


    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        alternateName: "Ymaa Desentupidora",
        url: "https://www.ymaadesentupidora.com.br/",
        email: "contato@ymaadesentupidora.com.br",
        keywords: "Desentupidora 24h, desentupidora, manutenção de esgoto comercial, desentupidora rj",
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
            "@id": "https://www.ymaadesentupidora.com.br/desentupimento/comercial/manutencao-de-esgoto"
        }
    };

    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">

                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Serviços Comerciais de Manutenção de Esgoto
                    </h1>

                    <p className="text-gray-dark leading-relaxed">
                        No mundo comercial, um esgoto funcional é fundamental para manter suas operações fluindo sem problemas. Na <span className="font-bold text-ymaa-green">Ymaa Desentupidora</span>, entendemos a importância de um sistema de esgoto bem mantido e oferecemos serviços especializados para estabelecimentos comerciais.
                    </p>

                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Por que a manutenção regular é crucial?
                    </h2>

                    <p className="text-gray-dark leading-relaxed">
                        Para estabelecimentos comerciais, qualquer interrupção devido a problemas de esgoto pode resultar em perdas financeiras. A manutenção regular assegura que problemas potenciais sejam identificados e resolvidos antes que se tornem emergências dispendiosas.
                    </p>

                </div>
            </div>

            <LocalBusinessStructuredData data={localBusinessStructuredDataYmaa} />
        </>
    );
};

export default DesentupimentoComercialManutencaoEsgoto;
