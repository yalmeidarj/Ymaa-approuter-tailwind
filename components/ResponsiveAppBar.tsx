"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { GrMenu, GrFormClose } from 'react-icons/gr';

const pages = ['Sobre', 'Desentupimentos', 'Blog'];

function ResponsiveAppBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const handleToggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const handleCallUs = () => {
        window.location.href = "tel:+55213297-3588";
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // If the navbar is open and there's a reference to the navbar and the clicked target is not inside the navbar, close it
            if (isNavOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsNavOpen(false);
            }
        };

        // Add the event listener when the navbar is open
        if (isNavOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup: remove the event listener when the component is unmounted or the navbar is closed
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavOpen]);


    return (
        <div className="bg-[#1b4332] p-4 relative" ref={navRef}>
            <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                <Link href="/">
                    <Image
                        alt="Ymaa desentupidora Logo"
                        src="https://ymaa.blob.core.windows.net/newcontainer/Logo-light.png"
                        width="220"
                        height="220"
                        priority
                    />
                </Link>

                <button onClick={handleToggleNav} aria-label='Menu' className="md:hidden text-white p-2">
                    {isNavOpen ? <GrFormClose className="text-green-lighter" size={30} /> : <GrMenu size={25} className="text-green-lighter" />}
                </button>

                {isNavOpen && (
                    <div className="md:hidden z-30 absolute top-full left-0 bg-brown p-4 shadow-lg w-full">
                        {pages.map((page) => (
                            <Link className="block mt-2 border-b border-green-lighter text-white" onClick={handleToggleNav} key={page} href={"/" + page.toLowerCase()}>

                                {page}

                            </Link>
                        ))}
                        <button onClick={handleCallUs} className="flex items-center mt-2 border-b-green-lighter">
                            (21) 3297-3588
                            <BsFillPhoneVibrateFill className="ml-2" />
                        </button>
                    </div>
                )}

                <div className="hidden md:flex space-x-4 items-center text-white">
                    {pages.map((page) => (
                        <Link className="block mt-2 text-white" key={page} href={"/" + page.toLowerCase()}>

                            {page}

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



