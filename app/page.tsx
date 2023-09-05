import Banner from '../components/Banner'
import CallLandLineButton from '../components/CallLandLineButton'
import OurClients from '../components/OurClients'
import WhatsAppButton from '../components/WhatsAppButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"> */}
      <Banner imageSrc={'https://ymaa.blob.core.windows.net/newcontainer/bg_home.jpg'} title={'Desentupimento rápido e sem sujeira'} />
      {/* </div> */}

      <div className="bg-EAE7DC p-6 md:p-8  text-black">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-1b4332">Sobre nós</h2>
        <p className="mb-4 text-base md:text-lg font-bold border-l-4 border-cyan-800 pl-3">
          A <span className="font-bold">Ymaa Desentupidora</span> é a sua parceira no Rio de Janeiro quando o assunto é desentupimento!
        </p>

        <p className="mb-4">
          Nos dedicamos a oferecer soluções ágeis, eficazes e amigáveis ao meio ambiente. Como podemos resolver o seu problema? 🤔
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-1b4332">O que oferecemos:</h3>
        <ul className="list-disc pl-5 mb-4 text-577830">
          <li className="text-gray-600 mb-2 hover:text-gray-900">
            <Link href='/desentupimento-de-ralos-seja-internos-externos'>
              Desentupimento de ralos, seja em ambientes internos ou externos.
            </Link>
          </li>
          {[
            // "Desentupimento de ralos, seja em ambientes internos ou externos.",
            "Resgate de vasos sanitários – dizer adeus a obstruções nunca foi tão fácil!",
            "Sua pia de cozinha não escoa? Estamos aqui para resolver.",
            "Caixas de esgoto e caixas de gordura, tratamos ambas com o mesmo carinho.",
            "Manutenção de tubulações de água potável? Deixe conosco!",
            "E o melhor: estamos à disposição 24 horas por dia!"
          ].map((item, idx) => (
            <li key={idx} className="text-gray-600 mb-2 hover:text-gray-900">
              <Link href='#'>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" flex flex-row flex-wrap mb-4 p-4 m-2 justify-center items-center bg-[#1B4332] border-gray-300 bg-gradient-to-b from-#577830 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-#577830 dark:from-inherit">

          <h1 className="mb-4  text-white">
            Precisa desentupir? Não hesite! Ligue para nós:{' '}
            {/* <span className="text-577830 font-bold ml-1">(inserir seu número)</span> ou mande uma mensagem no Whatsapp: */}
            {/* <span className="text-577830 font-bold ml-1">(inserir seu número)</span>. Aqui na Ymaa Desentupidora, a sua satisfação é nossa maior missão. Juntos, mantemos o Rio fluindo! 🌊 */}
          </h1>
          <WhatsAppButton />
          <CallLandLineButton />
        </div>
      </div>
      <section >
        <OurClients />
      </section>
    </main>

  )
}
