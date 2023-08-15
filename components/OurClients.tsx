"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

type OurclientsProps = {
    // define your props here
}

const clientImages = [
    "https://ymaa.blob.core.windows.net/ymaa-clients/balada-mix.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/billy-the-grill.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/bobs.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/casa-video.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/don-empada.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/grand-cru.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/multi-coisas.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/mundo-verde.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/petz.jpg",
    "https://ymaa.blob.core.windows.net/ymaa-clients/entupimento-coluna-coletora.jpg",
];

const Ourclients = (props: OurclientsProps) => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const clientsToShow = 2;

    const handleLeftClick = () => {
        setCurrentStartIndex(oldIndex => Math.max(oldIndex - 1, 0));
    }

    const handleRightClick = () => {
        setCurrentStartIndex(oldIndex => Math.min(oldIndex + 1, clientImages.length - clientsToShow));
    }

    return (
        // <div className="w-full flex flex-col items-center p-5">
        //     <div className="text-primary flex items-center justify-center flex-col mb-8">
        //         <h1 className="text-green-dark text-2xl text-grenn-d mb-4">Algumas de nossas parcerias!</h1>
        //         <p className="text-gray-dark">Veja quem já conferiu e aprovou nossos serviços!<span className="text-secondary"></span>! </p>
        //     </div>

        //     <div className="w-full flex items-center justify-center space-x-5">
        //         <button className="bg-gray-200 text-secondary p-2.5 rounded-md hover:bg-gray-300 focus:outline-none" onClick={handleLeftClick}>
        //             <AiOutlineDoubleLeft />
        //         </button>

        //         {clientImages.slice(currentStartIndex, currentStartIndex + clientsToShow).map((src, index) => (
        //             <div className="shadow-md rounded-md overflow-hidden cursor-zoom-in" key={index}>
        //                 <Image
        //                     width={180}
        //                     height={100}
        //                     className="object-cover"
        //                     src={src}
        //                     alt={`Client ${index + 1}`}
        //                 />
        //             </div>
        //         ))}

        //         <button className="bg-gray-200 text-secondary p-2.5 rounded-md hover:bg-gray-300 focus:outline-none" onClick={handleRightClick}>
        //             <AiOutlineDoubleRight />
        //         </button>
        //     </div>
        // </div>
        <section className="bg-white p-8">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-green-dark mb-6">O Que Nossos Clientes Falam</h2>

                <div className="space-y-6">
                    {/* Review 1 */}
                    <div className="p-6 bg-green-lighter border border-mid-green rounded-md shadow-sm">
                        <p className="text-base md:text-lg text-gray-dark mb-4">
                            <BiSolidQuoteAltLeft className='text-white' />

                            Cláudio e sua equipe fizeram um trabalho incrível na nossa tubulação de banheiro. Rápido, e muito profissional. Altamente recomendado!
                            <BiSolidQuoteAltRight className='text-white' />
                        </p>
                        <div className="flex items-center">
                            {/* <img src="/path_to_image" alt="customer-1" className="w-12 h-12 rounded-full mr-4" /> Customer Image */}
                            <div>
                                <p className="font-medium text-ymaa-green">Fausto Goes</p>
                                <p className="text-sm text-white">Dessetupimento no banheiro</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="p-6 bg-green-lighter border border-mid-green rounded-md shadow-sm">
                        <BiSolidQuoteAltLeft className='text-white' />
                        <p className="text-base md:text-lg text-gray-dark mb-4">
                            Responderam rápido e o serviço excepcional! O desentupimento da pia na cozinha foi resolvido em pouco tempo."
                            <BiSolidQuoteAltRight className='text-white' />
                        </p>
                        <div className="flex items-center">
                            {/* <img src="/path_to_image" alt="customer-2" className="w-12 h-12 rounded-full mr-4" /> Customer Image */}
                            <div>
                                <p className="font-medium text-ymaa-green">Diana Cátia</p>
                                <p className="text-sm text-white">Dessetupimento na cozinha</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="p-6 bg-green-lighter border border-mid-green rounded-md shadow-sm">
                        <BiSolidQuoteAltLeft className='text-white' />
                        <p className="text-base md:text-lg text-gray-dark mb-4">
                            Confiável e confiável. Sempre conto com este serviço de encanamento para a manutenção de nossos imóveis."
                            <BiSolidQuoteAltRight className='text-white' />
                        </p>
                        <div className="flex items-center">
                            {/* <img src="/path_to_image" alt="customer-3" className="w-12 h-12 rounded-full mr-4" /> Customer Image */}
                            <div>
                                <p className="font-medium text-ymaa-green">Geraldo Ermilio</p>
                                <p className="text-sm text-white">Contrato de manutenção</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <a href="/#" className="text-mid-green hover:underline">Mais Avaliações</a>
                </div>
            </div>
        </section>

    );
}

export default Ourclients;
