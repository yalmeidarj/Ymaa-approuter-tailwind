"use client"
import { BsTelephoneForward } from 'react-icons/bs';
function CallLandLineButton() {
    const handleCallUs = () => {
        window.location.href = "tel:+55213297-3588";
    };

    return (
        <button
            className='flex items-center justify-center bg-dark-orange hover:bg-orange text-white px-4 p-1 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 m-2'
            onClick={handleCallUs}
            aria-label="Call us at (21) 3297-3588"
        >
            <BsTelephoneForward aria-hidden="true" className="mr-2" />
            (21) 3297-3588
        </button>
    );
}

export default CallLandLineButton;





