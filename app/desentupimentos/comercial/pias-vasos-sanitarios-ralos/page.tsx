import React from 'react';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';

interface ServiceProps { }

const CommercialServices: React.FC<ServiceProps> = () => {


    const structuredData = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        name: "Ymaa Desentupidora e reformas",
        legalName: "Ymaa Desentupidora e reformas",
        url: "https://www.ymaadesentupidora.com.br/",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.ymaadesentupidora.com.br/desentupimento/comercial/pias-vasos-sanitarios-ralos",
        },
        logo: "", // Forneça o link da logo
        image: "", // Forneça o link da imagem principal
        email: "contato@ymaadesentupidora.com.br",
        keywords: "Desentupidora 24h, desentupidora, desentupidora de esgoto, desentupidora de coluna, desentupidora de caixa-de-gordura, desentupidora rj",
        knowsLanguage: "pt_BR",
        priceRange: "??", // Defina a faixa de preço
        address: {
            "@type": "PostalAddress",
            addressLocality: "Rio de Janeiro",
            addressRegion: "RJ",
            addressCountry: "BR",
        },
        telephone: "+552132973588",
        openingHoursSpecification: [ // Adicione os horários de funcionamento
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
            // Se funcionar aos sábados ou domingos, adicione outras especificações
        ],
    };

    return (
        <div className="max-w-screen-md mx-auto p-4 space-y-4 m-4 bg-background text-black">

            <LocalBusinessStructuredData data={structuredData} />

            <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-ymaa-green mb-4">Serviços Comerciais de Desentupimento</h1>
                <p className="text-mid-green">
                    Atendemos ao segmento comercial com eficiência e rapidez, oferecendo soluções desde desentupimento de pias, vasos sanitários até ralos em estabelecimentos comerciais. Garanta um ambiente de trabalho sem transtornos com a Ymaa Desentupidora.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-medium text-ymaa-green">Desentupimento Comercial de Pias, Vasos Sanitários e Ralos</h2>
                <p className="text-gray-dark">
                    Interrupções nos estabelecimentos comerciais podem afetar gravemente as operações do dia-a-dia. Seja uma pia entupida no refeitório ou um vaso sanitário bloqueado em um banheiro público, estamos aqui para resolver seus problemas rapidamente.
                </p>
                <p className="text-gray-dark">
                    Com equipamentos de ponta e profissionais treinados, garantimos soluções eficientes para manter seu comércio funcionando sem problemas. Escolha a Ymaa Desentupidora para um serviço confiável e de qualidade.
                </p>
                <button className="bg-ymaa-green text-white px-4 py-2 rounded transition hover:bg-green-dark">
                    Solicite um Orçamento
                </button>
            </section>
        </div>
    );
};

export default CommercialServices;
