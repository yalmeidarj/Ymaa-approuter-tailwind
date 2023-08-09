"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';

const pages = ['Sobre Nós', 'Serviços', 'Blog'];

function ResponsiveAppBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const handleCallUs = () => {
        window.location.href = "tel:+55213297-3588";
    };

    return (
        <div className="bg-[#1b4332] p-4 relative"> {/* Relative here ensures the absolute child positions relative to this */}
            <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">

                <Link href="/">
                    <Image
                        alt="Logo"
                        src="https://ymaa.blob.core.windows.net/newcontainer/Logo-light.png"
                        width="220"
                        height="220"
                        loading="lazy"
                    />
                </Link>

                <button onClick={handleToggleNav} className="md:hidden p-2">
                    {isNavOpen ? "Close" : "Menu"}
                </button>

                {isNavOpen && (
                    <div className="md:hidden absolute top-full left-0 bg-white p-4 shadow-lg w-64 z-10">
                        {pages.map((page) => (
                            <Link className="block mt-2 text-black" href={"/" + page.toLowerCase()} key={page}>
                                {page} {/* Added block and margin for spacing */}
                            </Link>
                        ))}
                        <button onClick={handleCallUs} className="flex items-center mt-2">
                            (21) 3297-3588
                            <BsFillPhoneVibrateFill className="ml-2" />
                        </button>
                    </div>
                )}

                <div className="hidden md:flex space-x-4 items-center text-white">
                    {pages.map((page) => (
                        <Link className="block mt-2 text-white" href={"/" + page.toLowerCase()} key={page}>
                            {page}{/* Added hover effect for clarity */}
                        </Link>
                    ))}
                    <button onClick={handleCallUs} className="flex items-center text-white space-x-2">
                        <span className="block mt-2 text-white">(21) 3297-3588</span>
                        <BsFillPhoneVibrateFill />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ResponsiveAppBar;


