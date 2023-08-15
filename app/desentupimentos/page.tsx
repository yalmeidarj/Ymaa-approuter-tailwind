// pages/services.tsx

import React from 'react';
import Head from 'next/head';
import WhatsAppButton from 'components/WhatsAppButton';
import ServiceCard from 'components/ServiceCard';
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
                <ServiceCard
                    colorClass="text-ymaa-green"
                    title="Desentupimento"
                    description="Desentupimento de ralos, pias e bueiros. Se você está enfrentando problemas de entupimento, temos a solução."
                    link="/service/ralos-pias-bueiros"
                />

                <ServiceCard
                    colorClass="text-mid-green"
                    title="Vasos e Banheiras"
                    description="Vaso sanitário ou banheira entupidos? Não se preocupe. Nossos especialistas podem ajudar rapidamente."
                    link="/service/vaso-banheira"
                />

                <ServiceCard
                    colorClass="text-green-lighter"
                    title="Tubulações"
                    description="Mantenha suas tubulações limpas, seja de água potável ou outras. Nossos serviços abrangem todos os tipos de tubulações."
                    link="/service/tubulacoes"
                />

                <ServiceCard
                    colorClass="text-light-green"
                    title="Caixa de Gordura"
                    description="Limpeza e manutenção de caixa de gordura. Evite problemas maiores com nosso serviço especializado."
                    link="/service/caixa-de-gordura"
                />
            </ul>
        </div>

    );
}
