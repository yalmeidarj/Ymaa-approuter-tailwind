import ResponsiveAppBar from '../components/ResponsiveAppBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import ContactUsButtons from '../components/ContactUsButtons'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
  title: 'Ymaa Desentupidora',
  description: 'Sua Desentupidora de confiança no RJ',
  verification: {
    google: "google-site-verifitation=G-7X7R3Z6XBB",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
        <ContactUsButtons />
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
