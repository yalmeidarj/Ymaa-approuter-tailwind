import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData'
import type { Metadata } from 'next'
// import { localBusinessStructuredDataYmaa } from 'utils/lib/getData'

export const metadata: Metadata = {
    metadataBase: new URL('https://www.ymaadesentupidora.com.br'),
    title: 'Serviços da Ymaa Desentupidora e Reformas',
    description: 'Entenda mais sobre nossos serviços de desentupimento e reformas',

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div >
            {children}
            {/* <LocalBusinessStructuredData
                data={localBusinessStructuredDataYmaa}
            /> */}
        </div>
    )
}