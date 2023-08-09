"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

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
        <div className="w-full flex flex-col items-center p-5">
            <div className="text-primary flex items-center justify-center flex-col mb-8">
                <h1 className="text-2xl mb-4">Alguns de Nossos Clientes</h1>
                <p className="text-gray-dark">Mais <span className="text-secondary">satisfeitos</span>! </p>
            </div>

            <div className="w-full flex items-center justify-center space-x-5">
                <button className="bg-gray-200 text-secondary p-2.5 rounded-md hover:bg-gray-300 focus:outline-none" onClick={handleLeftClick}>
                    <AiOutlineDoubleLeft />
                </button>

                {clientImages.slice(currentStartIndex, currentStartIndex + clientsToShow).map((src, index) => (
                    <div className="shadow-md rounded-md overflow-hidden cursor-zoom-in" key={index}>
                        <Image
                            width={180}
                            height={100}
                            className="object-cover"
                            src={src}
                            alt={`Client ${index + 1}`}
                        />
                    </div>
                ))}

                <button className="bg-gray-200 text-secondary p-2.5 rounded-md hover:bg-gray-300 focus:outline-none" onClick={handleRightClick}>
                    <AiOutlineDoubleRight />
                </button>
            </div>

        </div>
    );
}

export default Ourclients;
