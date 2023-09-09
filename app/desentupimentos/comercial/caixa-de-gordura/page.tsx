import React from 'react';
import Head from 'next/head';
import WhatsAppButton from 'components/WhatsAppButton';
import ArticleCard from 'components/ArticleCard';
import Link from 'next/link';

export async function generateMetadata() {
    const metadata = {
        title: "Desentupimento comercial de caixa de gordura",
        description: "Desentupimos caixas de gordura em restaurantes, hotéis, condomínios e outros estabelecimentos comerciais.",
        alternates: {
            canonical: `/desentupimentos`,
        },
        openGraph: {
            title: "Desentupimento comercial de caixa de gordura",
            description: "Desentupimos caixas de gordura em restaurantes, hotéis, condomínios e outros estabelecimentos comerciais.",
            url: 'https://www.ymaadesentupidora.com.br/',
            siteName: 'Ymaa Desentupidora e reformas',
            locale: 'pt_BR',
            type: 'website',
        },

    }

    return metadata
}


export default function Page() {
    return (
        <div className="bg-background text-black p-6">
            <h1 className="text-2xl font-bold mb-4 text-ymaa-green">Desentupimento comercial de caixa de gordura</h1>

            <div className="bg-white p-5 rounded-md shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-3 text-ymaa-green">Serviços Residenciais de Desentupimento</h2>
                <p className="mb-4"> Para desentupir caixas de gordura, a Ymaa Desentupidora utiliza equipamentos de ponta, como máquinas rotativas e hidrojateamento. Além disso, contamos com uma equipe altamente qualificada, que realiza o serviço com agilidade e eficiência.</p>
            </div>
        </div>

    );
}
