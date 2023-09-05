import '../../styles.css'
import type { Metadata } from 'next'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div >
            {children}
        </div>
    )
}