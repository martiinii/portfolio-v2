import { cn } from '@/lib/utils'
import './globals.css'
import { Inter, } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Martin | Fullstack web developer',
    description: 'Martin is mainly a front-end developer who likes to overcome challenges',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='dark'>
            <body className={cn(inter.className, 'bg-gray-950 min-h-screen')}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
