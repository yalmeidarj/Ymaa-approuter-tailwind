import ResponsiveAppBar from '../components/ResponsiveAppBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import ContactUsButtons from '../components/ContactUsButtons'
import Script from 'next/script'
import Head from 'next/head'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
  title: 'Ymaa Desentupidora',
  description: 'Sua Desentupidora de confiança no RJ',
  // verification: {
  //   google: "google-site-verifitation=G-7X7R3Z6XBB",
  // },
}
const GTM_ID = 'GTM-KV2ZMSRS'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* <!-- Google tag (gtag.js) --> */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-957801732"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'AW-957801732');
      </script> */}
      {/* <Gtag /> */}
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV2ZMSRS"
          height="0" width="0" className="display:none;visibility:hidden"></iframe></noscript>
        <ContactUsButtons />
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
