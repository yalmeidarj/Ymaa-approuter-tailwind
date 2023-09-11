import React from 'react';
import Head from 'next/head';
import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData';
import { localBusinessStructuredDataYmaa } from 'utils/lib/getData'
import { Metadata } from 'next';

type Props = {};

// comercial/coluna
export const metadata: Metadata = {
    metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
    title: 'Desentupir coluna comercial com a Ymaa Desentupidora',
    description: 'Desentupimos sua coluna comercial',
    alternates: {
        canonical: 'https://www.ymaadesentupidora.com.br/comercial/coluna',
    },
}

const DesentupimentoResidencialColuna: React.FC<Props> = () => {


    return (
        <>
            <div className="bg-background p-6">
                <div className="max-w-screen-lg mx-auto space-y-6">

                    {/* Heading 1 */}
                    <h1 className="text-3xl font-bold text-ymaa-green mb-4">
                        Serviços Residenciais de Desentupimento de Coluna
                    </h1>

                    {/* Paragraph 1 with improved contrast */}
                    <p className="text-gray-dark">
                        A <span className="font-bold text-ymaa-green">Ymaa Desentupidora</span> é especialista em desentupimento de colunas residenciais. Com técnicos treinados e equipamentos de ponta, garantimos a eliminação de bloqueios e a restauração do fluxo normal em suas colunas, assegurando a paz e segurança em seu lar.
                    </p>

                    {/* Heading 2 */}
                    <h2 className="text-2xl font-semibold text-ymaa-green mt-6 mb-4">
                        Por que é essencial desentupir colunas?
                    </h2>

                    {/* Paragraph 2 with improved contrast */}
                    <p className="text-gray-dark">
                        As colunas são essenciais para o correto escoamento da água em residências. Quando entupidas, podem causar vazamentos, infiltrações e outros problemas estruturais. O desentupimento regular de colunas evita danos maiores e custos elevados com reparos no futuro.
                    </p>
                </div>
            </div>
            <LocalBusinessStructuredData data={localBusinessStructuredDataYmaa} />
        </>
    );
};

export default DesentupimentoResidencialColuna;
