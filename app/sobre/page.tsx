// pages/services.tsx

import React from 'react';
import Image from 'next/image';
import WhatsAppButton from 'components/WhatsAppButton';
// import ServiceCard from 'components/ServiceCard';
import CallLandLineButton from 'components/CallLandLineButton';
import img from '/public/desentupimento-de-bueiro-externo.png'
import logoImg from '/public/logo-antiga-logo-nova.png'
import ymaaHouse from '/public/Ymaa-logo-house.png'

export async function generateMetadata() {


    const metadata = {
        title: "Sobre a Ymaa Desentupidora",
        description: "Conheça um pouco sobre a Ymaa Desentupidora",
        alternates: {
            canonical: `/sobre`,
        },
        verification: {
            google: "https://www.googletagmanager.com/gtag/js?id=G-7X7R3Z6XBB",
        },
        openGraph: {
            title: "Sobre a Ymaa Desentupidora",
            description: "Conheça um pouco sobre a Ymaa Desentupidora",
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
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Um pouco sobre a Ymaa Desentupidora</h1>

            <h3 className="text-sm md:text-xl font-bold mb-4 md:mb-8">Há mais de 20 anos servindo no Rio de Janeiro</h3>
            <p className="text-black  text-justify">A Ymaa Desentupidora é uma empresa familiar que atua no mercado de desentupimento há mais de 20 anos. Nossa equipe é formada por profissionais experientes e qualificados, que estão sempre prontos para atender nossos clientes com agilidade e eficiência. Nossa missão é oferecer serviços de qualidade, com preços acessíveis e atendimento personalizado. Trabalhamos com equipamentos modernos e de última geração, que garantem um serviço rápido e eficiente.</p>
            <div className="flex flex-col items-center bg-green-lighter p-4 sm:p-6">
                <Image
                    src={img}
                    loading="lazy"
                    // src="/desentupimento-de-bueiro-externo.png"
                    alt='desentupimento de bueiro externo'
                    width={280}
                    height={280}
                />
                <p className="text-black text-justify">Atendemos em todo o Rio de Janeiro, com horário de atendimento 24 horas por dia, 7 dias por semana. Entre em contato conosco e solicite um orçamento sem compromisso.</p>
                <div className='flex flex-col'>
                    <CallLandLineButton /><WhatsAppButton />
                </div>
            </div>

        </div>

    );
}
