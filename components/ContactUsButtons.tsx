import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import WhatsAppButton from './WhatsAppButton';
import CallLandLineButton from './CallLandLineButton';


function ResponsiveAppBar() {


    return (
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-#577830 pb-6 pt-8 backdrop-blur-2xl dark:border-[#577830]/30 dark:bg-[#577830]/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-[#577830]/30 lg:p-4 lg:dark:bg-[#577830]/30"> {/* Relative here ensures the absolute child positions relative to this */}
            <CallLandLineButton />
            <WhatsAppButton />
        </div>
    );
}

export default ResponsiveAppBar;