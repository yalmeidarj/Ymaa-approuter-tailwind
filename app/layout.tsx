import ResponsiveAppBar from '@/components/ResponsiveAppBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ymaa Desentupidora',
  description: 'Sua Desentupidora de confiança no RJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
