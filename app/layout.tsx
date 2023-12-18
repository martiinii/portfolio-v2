import './globals.css'
import localFont from "next/font/local"
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = localFont({
    src: './Inter.woff2',
    variable: '--font-sans',
    display: 'swap',
    fallback: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Arial"
    ]
})


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
            <body className={cn("font-sans antialiased bg-gray-950 min-h-screen", inter.variable)}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
