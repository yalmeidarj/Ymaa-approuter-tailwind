"use client";
import { FaWhatsapp } from 'react-icons/fa';
import * as React from 'react';

function WhatsAppButton() {
    const handleWhatsApp = () => {
        window.location.href = "https://wa.me/5521968792222";
    };

    return (
        <button
            className='flex items-center justify-center bg-green-dark hover:bg-green-700 text-white px-4 p-1 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 m-2 border-2 border-white'
            onClick={handleWhatsApp}
            aria-label="Open WhatsApp"
        >
            <FaWhatsapp size={24} aria-hidden="true" className="mr-2" />
            WhatsApp
        </button>
    );
}

export default WhatsAppButton;

