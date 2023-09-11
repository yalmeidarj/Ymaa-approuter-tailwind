import LocalBusinessStructuredData from 'components/LocalBusinessStructuredData'
import type { Metadata } from 'next'
// import { localBusinessStructuredDataYmaa } from 'utils/lib/getData'

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