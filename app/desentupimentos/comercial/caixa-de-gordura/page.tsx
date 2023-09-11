import React from 'react';
import Head from 'next/head';
import WhatsAppButton from 'components/WhatsAppButton';
import ArticleCard from 'components/ArticleCard';
import Link from 'next/link';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
    title: 'Desentupir caixa de gordura comercial com a Ymaa Desentupidora',
    description: 'Desentupimos sua caixa de gordura comercial',
    alternates: {
        canonical: 'https://www.ymaadesentupidora.com.br/comercial/caixa-de-gordura',
    },
}


export default function Page() {
    return (
        <div className="bg-background text-black p-6">
            <h1 className="text-2xl font-bold mb-4 text-ymaa-green">Desentupimento comercial de caixa de gordura</h1>

            <div className="bg-white p-5 rounded-md shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-3 text-ymaa-green">Serviços Residenciais de Desentupimento</h2>
                <p className="mb-4"> Para desentupir caixas de gordura, a Ymaa Desentupidora utiliza equipamentos de ponta, como máquinas rotativas e hidrojateamento. Além disso, contamos com uma equipe altamente qualificada, que realiza o serviço com agilidade e eficiência.</p>
            </div>
            <LocalBusinessStructuredData
                data={localBusinessStructuredDataYmaa}
            />
        </div>
    );
}
