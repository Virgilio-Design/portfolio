import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope, Inter, Google_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ variable: '--font-cormorant', subsets: ['latin'], display: 'swap' })
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'], display: 'swap' })
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })
const googleSans = Google_Sans({ variable: '--font-google-sans', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Virgílio Design',
  description: 'Virgílio Design — designer especializado em identidades visuais, espaços e experiências.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${manrope.variable} ${inter.variable} ${googleSans.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
