import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter, BsYoutube, BsFillPhoneVibrateFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="">
                    {/* <div className="flex-grow"> */}

                    <footer className="bg-green-dark text-neutral p-5">
                        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="mb-5 md:mb-0">
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
                                <h4 className="text-primary text-xl md:text-2xl mb-4">Links Úteis</h4>
                                <ul className="space-y-2">
                                    {/* Add more list items similarly */}
                                    <li><Link href="#" className="hover:text-secondary">Empresa desentupidora rj</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-primary text-xl md:text-2xl mb-4">Áreas de Atendimento</h4>
                                <ul className="space-y-2">
                                    {/* Add more list items similarly */}
                                    <li>
                                        <Link href="#" className="italic hover:text-secondary">
                                            Barra da Tijuca
                                        </Link>
                                    </li>
                                    <li className="italic hover:text-secondary">
                                        <Link href="#">
                                            Recreio dos Bandeirantes
                                        </Link>
                                    </li>
                                    <li className="italic hover:text-secondary"><Link href="#"> Zona Sul</Link></li>
                                    <li className="italic hover:text-secondary"><Link href="#"> Zona Norte</Link></li>
                                    <li className="italic hover:text-secondary"><Link href="#"> Zona Oeste</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-primary text-xl md:text-2xl mb-4">Contato</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className=""></i>
                                        <a href="mailto: ymaadesentupidora@gmail.com">
                                            ymaadesentupidora@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <BsTwitter />
                                        <a href="https://www.facebook.com/desentupidoraymaa/">
                                            /desentupidoraymaa
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <BsYoutube />
                                        <a href="https://www.facebook.com/desentupidoraymaa/">
                                            /desentupidoraymaa
                                        </a>
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
                                        <Link href="https://www.facebook.com/desentupidoraymaa/" className="hover:text-secondary">/desentupidoraymaa</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="bg-black text-neutral flex flex-wrap w-full items-center justify-center mt-8 py-3 text-center text-sm md:text-base">
                            © 2023 Ymaa Desentupidora - Desenvolvido e estilizado por{" "}
                            <Link rel="nofollow" target="_blank" className="hover:text-orange m-1" href="https://yalmeida-nu.vercel.app/">
                                Yalmeida
                            </Link> |
                            <Link rel="nofollow" target="_blank" className="hover:text-orange ml-2" href="https://github.com/yalmeidarj">
                                <SiGithub />
                            </Link>
                        </div>
                    </footer >
                </div>
            </div>
        </>
    );
}

export default Footer;
