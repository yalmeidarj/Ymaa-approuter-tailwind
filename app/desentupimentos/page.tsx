// pages/services.tsx

import React from 'react';
import Head from 'next/head';
import WhatsAppButton from 'components/WhatsAppButton';
import ArticleCard from 'components/ArticleCard';

export async function generateMetadata() {
    const metadata = {
        title: "Nossos Serviços",
        description: "Serviços de desentupimento e reformas da Ymaa",
        alternates: {
            canonical: `/desentupimentos`,
        },
        verification: {
            google: "https://www.googletagmanager.com/gtag/js?id=G-7X7R3Z6XBB",
        },
        openGraph: {
            title: "Nossos Serviços",
            description: "Serviços de desentupimento e reformas da Ymaa",
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
        <div className="min-h-screen bg-white text-gray-dark p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Nossos Serviços</h1>
            {/* <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Desentupimento 24 horas em todo Rio de Janeiro</h2> */}
            {/* Make subtitle even smaller   */}
            <h3 className="text-sm md:text-xl font-bold mb-4 md:mb-8">Desentupimento 24 horas em todo Rio de Janeiro</h3>
            <p className="text-black">Desentupimento de ralos, pias e bueiros. Se você está enfrentando problemas de entupimento, temos a solução.</p>
            <WhatsAppButton />

            <ul className="space-y-4">

            </ul>
        </div>

    );
}
