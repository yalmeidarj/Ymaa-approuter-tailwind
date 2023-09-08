// pages/services.tsx

import React from 'react';
import Head from 'next/head';
import WhatsAppButton from 'components/WhatsAppButton';
import ArticleCard from 'components/ArticleCard';
import Link from 'next/link';

export async function generateMetadata() {
    const metadata = {
        title: "Nossos Serviços",
        description: "Serviços de desentupimento e reformas da Ymaa",
        alternates: {
            canonical: `/desentupimentos`,
        },
        // verification: {
        //     google: "google-site-verifitation=G-7X7R3Z6XBB",
        // },
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
        <div className="bg-background text-black p-6">
            <h1 className="text-2xl font-bold mb-4 text-ymaa-green">Serviços</h1>

            <div className="bg-white p-5 rounded-md shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-3 text-ymaa-green">Serviços Residenciais de Desentupimento</h2>
                <p className="mb-4">Oferecemos uma vasta gama de soluções residenciais, abrangendo desde o desentupimento de esgotos até manutenção preventiva, garantindo o conforto e bem-estar em seu lar.</p>
                <ul className="space-y-2">
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Esgoto</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Caixa de Gordura</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Coluna</span></Link>
                    </li>
                    <li>
                        <Link href="/#"><span className="underline text-mid-green">Pias/Vasos Sanitários/Ralos</span></Link>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-5 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-3 text-ymaa-green">Soluções Comerciais de Manutenção e Desentupimento</h2>
                <p className="mb-4">Somos especialistas em soluções comerciais personalizadas. Nosso compromisso é garantir a eficiência das operações do seu negócio, seja através de contratos de manutenção, serviços de desentupimento ou outras demandas empresariais.</p>
                <ul className="space-y-2">
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Contrato de Manutenção</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Manutenção de Esgoto</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Caixa de Gordura</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Coluna</span></Link>
                    </li>
                    <li>
                        <Link href="#"><span className="underline text-mid-green">Pias/Vasos Sanitários/Ralos</span></Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}
