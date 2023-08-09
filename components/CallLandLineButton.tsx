"use client"
import { BsTelephoneForward } from 'react-icons/bs';
function CallLandLineButton() {
    const handleCallUs = () => {
        window.location.href = "tel:+55213297-3588";
    };

    return (
        <button
            className='flex items-center justify-center hover:bg-cyan-400 text-white px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400'
            onClick={handleCallUs}
            aria-label="Call us at (21) 3297-3588"
        >
            <BsTelephoneForward size={24} aria-hidden="true" className="mr-2" />
            (21) 3297-3588
        </button>
    );
}

export default CallLandLineButton;





