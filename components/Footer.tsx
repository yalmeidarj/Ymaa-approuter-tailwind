import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter, BsYoutube, BsFillPhoneVibrateFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            {/* <div className="flex flex-col  min-h-screen"> */}

            <footer className="bg-green-dark text-neutral p-5">
                <div className="flex flex-row flex-wrap items-center justify-start space-y-5 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
                    <div className="bg-green-dark mb-5 md:mb-2 border border-green-lighter border-solid m-4">
                        <Image
                            className="rounded-md"
                            alt="Logo"
                            src="https://ymaa.blob.core.windows.net/newcontainer/Logo-light.png"
                            width="156"
                            height="156"
                            loading="lazy"
                        />
                    </div>

                    <div>

                        <h4 className="text-primary text-xl md:text-2xl mb-4">Áreas de Atendimento</h4>
                        <ul className="space-y-2">
                            {/* Add more list items similarly */}
                            <li>
                                <Link href="#" className="italic hover:text-secondary">
                                    Zona Oeste
                                </Link>
                            </li>
                            <li className="italic hover:text-secondary"><Link href="#"> Zona Sul</Link></li>
                            <li className="italic hover:text-secondary"><Link href="#"> Zona Norte</Link></li>
                            <li className="italic hover:text-secondary"><Link href="#"> Centro</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-primary text-xl md:text-2xl mb-4">Contato</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <i className=""></i>
                                <a href="mailto: contato@ymaadesentupidora.com.br">
                                    contato@ymaadesentupidora.com.br
                                </a>
                            </li>
                            <li className="flex items-center">
                                <BsTwitter />
                                <Link className='ml-1' target="_blank" href="https://twitter.com/YmaaDesentope">
                                    Twitter
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BsYoutube />
                                <Link className='ml-1' target="_blank" href="https://www.youtube.com/@YmaaDesentupidora">
                                    YouTube
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BsFillTelephoneFill />
                                <a href="tel:2132973588"> (21) 3297-3588</a>
                            </li>
                            <li className="flex items-center">
                                <BsFillPhoneVibrateFill />
                                <a href="tel:21968792222"> (21) 96879-2222</a>
                            </li>
                            <li className="flex items-center">
                                <BsFacebook className="mr-2" />
                                <Link target="_blank" href="https://www.facebook.com/profile.php?id=100092752671613" className="hover:text-secondary">/desentupidoraymaa</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bg-black text-neutral flex flex-wrap w-full items-center justify-center mt-8 py-3 text-center text-sm md:text-base">
                    © 2023 Ymaa Desentupidora - Desenvolvido e estilizado por{" "}
                    <Link rel="nofollow" target="_blank" className="text-gray-light hover:text-orange m-1" href="https://yalmeida-nu.vercel.app/">
                        Yalmeida
                    </Link>
                </div>
            </footer >
            {/* </div> */}

        </>
    );
}

export default Footer;
