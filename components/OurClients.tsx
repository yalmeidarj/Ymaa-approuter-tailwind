"use client"
import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

type ReviewType = {
    stars: number;
    content: string;
    author: string;
    source: string;
    description: string;
};

const reviews: ReviewType[] = [
    {
        stars: 5,
        content: 'Cláudio e sua equipe fizeram um trabalho incrível na nossa tubulação de banheiro. Rápido, e muito profissional. Altamente recomendado!',
        author: 'Fausto Goes',
        source: 'Google',
        description: 'Desetupimento no banheiro',
    },
    {
        stars: 5,
        content: 'Responderam rápido e o serviço excepcional! O desentupimento da pia na cozinha foi resolvido em pouco tempo.',
        author: 'André Leandro',
        source: 'Google',
        description: 'Desetupimento de pia na cozinha',
    },
    {
        stars: 5,
        content: 'Confiável e confiável. Sempre conto com este serviço de encanamento para a manutenção de nossos imóveis.',
        author: 'Vanessa',
        source: 'Google',
        description: 'Desetupimento de esgoto',
    },

];

const OurClients: React.FC = () => {

    return (
        <div className="p-6 bg-white border  rounded-md shadow-sm max-w-sm overflow-x-auto">
            <div className="flex whitespace-nowrap ">
                {reviews.map((review, index) => (
                    <div key={index} className="flex-none m-2 ">
                        <BiSolidQuoteAltLeft className="text-white" />
                        <div className="flex items-center mb-2 border-mid-green">
                            {Array.from({ length: review.stars }).map((_, idx) => (
                                <AiFillStar key={idx} className="text-yellow-400" />
                            ))}
                        </div>

                        <p className="text-base md:text-lg text-gray-dark mb-4">
                            {review.content}
                            <BiSolidQuoteAltRight className="text-white" />
                        </p>

                        <div className="flex items-center">
                            <FcGoogle className="mr-2" /> {/* Adjust this based on source */}
                            <p className="font-medium text-ymaa-green">{review.author}</p>
                        </div>
                        <p className="text-sm text-gray-light">{review.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClients;




    // const clientImages = [
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/balada-mix.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/billy-the-grill.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/bobs.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/casa-video.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/don-empada.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/grand-cru.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/multi-coisas.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/mundo-verde.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/petz.jpg",
    //     "https://ymaa.blob.core.windows.net/ymaa-clients/entupimento-coluna-coletora.jpg",
    // ];