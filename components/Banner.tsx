import Image from 'next/image';
import ContactUsButtons from './ContactUsButtons';

interface BannerProps {
    imageSrc: string;
    title: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, title }) => {
    return (
        <div className="bg-light-orange p-4 sm:p-6">
            {/* <div>
            </div> */}
            <div className="flex flex-col items-center">
                <ContactUsButtons />
                <div className="text-start mb-4">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">Desentupimento <span className="text-red-500">rápido</span> e sem sujeira</h1>
                    <p className="mb-4">A Ymaa realiza serviços de desentupimento de forma rápida e sem sujeira! Nós resolvemos qualquer tipo de entupimento para você, seja em locais residenciais ou comerciais, 24 horas!</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
                    <button className="bg-blue-500 text-white py-2 px-4 w-full sm:w-auto rounded">Fale conosco</button>
                    <button className="bg-blue-200 text-blue-700 py-2 px-4 w-full sm:w-auto rounded">Orçamento rápido <span className="underline">Saiba mais</span></button>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-6">
                    <Image
                        className="rounded shadow-md"
                        src={imageSrc}
                        width={250}
                        height={100}
                        alt="Banner depicting a clean space provided by our service"
                        quality={75}
                        sizes="(max-width: 40em) 100vw, (max-width: 60em) 50vw, 33vw"
                    />

                    <Image
                        className="rounded shadow-md"
                        src={imageSrc}
                        width={211}
                        height={365}
                        alt="Banner depicting a clean space provided by our service"
                        quality={75}
                        sizes="(max-width: 40em) 100vw, (max-width: 60em) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
