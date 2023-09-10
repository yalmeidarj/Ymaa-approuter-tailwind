import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData'
import Banner from '../components/Banner'
import CallLandLineButton from '../components/CallLandLineButton'
import OurClients from '../components/OurClients'
import WhatsAppButton from '../components/WhatsAppButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LocalBusinessStructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Ymaa Desentupidora e Reformas",
          "legalName": "Ymaa Desentupidora e Reformas",
          "alternateName": "Ymaa Desentupidora",
          "url": "https://www.ymaadesentupidora.com.br/",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ymaadesentupidora.com.br/"
          },
          "logo": "http://placehold.it/512",
          "image": "https://ymaa.blob.core.windows.net/newcontainer/Logo-light.png",
          "email": "contato@ymaadesentupidora.com.br",
          "keywords": "Desentupidora de esgoto, desentupidora no rj, desentupidora rio de janeiro, desentupidora, desentupimento, desentupir, desentupidora de caixa-de-gordura, desentupidora 24h, desentupidora 24 horas rj, desentupidora 24h rj, desentupidora rj, desentupidora rio, desentupidora de coluna",
          "knowsLanguage": "pt-BR",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "addressCountry": "BR"
          },
          "telephone": "+552132973588",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "10:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          ],
          "serviceArea": [
            {
              "@type": "postalAddress",
              "addressLocality": "Rio de Janeiro",
              "addressRegion": "RJ",
              "addressCountry": "Brazil"
            }
          ],
        }}
      />
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
            <Link href='/desentupimentos'>
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
              <Link href='/desentupimentos'>
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
