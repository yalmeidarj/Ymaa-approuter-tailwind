import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData';

const ContratoDeManutencao: React.FC = () => {

    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        alternateName: "Ymaa Desentupidora",
        url: "https://www.ymaadesentupidora.com.br/",
        email: "contato@ymaadesentupidora.com.br",
        keywords: "Desentupidora 24h, desentupidora, contrato de manutenção residencial, desentupidora rj",
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
            "@id": "https://www.ymaadesentupidora.com.br/desentupimento/residencial/contrato-de-manutencao"
        }
    };

    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">

                    {/* Heading 1 */}
                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Contrato de Manutenção Residencial
                    </h1>

                    {/* Paragraph 1 with improved contrast */}
                    <p className="text-gray-dark">
                        Para garantir o bom funcionamento e a durabilidade das suas instalações hidráulicas, a
                        <span className="font-bold text-ymaa-green">Ymaa Desentupidora</span>
                        oferece contratos de manutenção residencial. Estes contratos são elaborados pensando no bem-estar e na tranquilidade dos nossos clientes.
                    </p>

                    {/* Heading 2 */}
                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Vantagens do Contrato de Manutenção
                    </h2>

                    {/* Paragraph 2 with improved contrast */}
                    <p className="text-gray-dark">
                        Com o contrato de manutenção, você tem a garantia de inspeções regulares e serviços de desentupimento quando necessário. Além disso, evita gastos inesperados e garante a rápida resolução de qualquer problema, sem surpresas no orçamento.
                    </p>
                </div>
            </div>


            <LocalBusinessStructuredData data={localBusinessStructuredDataYmaa} />
        </>
    );
};

export default ContratoDeManutencao;
