import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Calgary | Two Tone Lighting',
  description: 'Professional permanent LED lighting installation for Calgary homes. Install once, control from your phone. Holiday, accent & security lighting.',
  keywords: 'permanent outdoor lighting calgary, permanent christmas lights calgary, permanent led lighting calgary, outdoor lighting installation calgary',
  openGraph: {
    title: 'Permanent Outdoor Lighting Calgary | Two Tone Lighting',
    description: 'Professional permanent LED lighting installation for Calgary homes. Install once, control from your phone.',
    url: 'https://twotone.ca',
    siteName: 'Two Tone Lighting',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
