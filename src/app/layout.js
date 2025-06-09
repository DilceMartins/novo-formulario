import { Poppins } from 'next/font/google'
import { AuthProvider } from '@/context/Authocontext'

import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
})

export const metadata = {
    title: 'Interasd',
    description: 'Interasd',
}

export default function RootLayout({ children }) {
    return (
        <html lang='pt-BR'>
            <body className={`${poppins.className}`}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
