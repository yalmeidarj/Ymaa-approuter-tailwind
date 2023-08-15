import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';

interface BannerProps {
    imageSrc: string;
    title: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, title }) => {
    return (
        <div className="flex flex-col items-center bg-green-lighter p-4 sm:p-6">
            <div className="text-start mb-4">
                <h1 className=" text-black text-2xl sm:text-4xl font-bold mb-4">Desentupimento <span className="text-red-500">rápido</span> e sem sujeira</h1>
                <p className="mb-4 text-gray-dark">Nós resolvemos qualquer tipo de entupimento para você, seja em locais residenciais ou comerciais, <span className="text-orange">24 horas</span> 7 vezes na semana!</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
                {/* <button className="bg-blue-500 text-white py-2 px-4 w-full sm:w-auto rounded">Fale conosco</button> */}
                <WhatsAppButton />
                <button className="bg-blue-200 text-blue-700 py-2 px-4 w-full sm:w-auto rounded">Precisa de manutenção para mais de um imóvel? <span className="underline">Clique aqui</span></button>
            </div>

        </div>
    );
};

export default Banner;
