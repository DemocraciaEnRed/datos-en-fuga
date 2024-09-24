import type { Metadata } from 'next'
import { Monda, Mada, Kanit } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import ScrollTopButton from './components/ScrollTopButton'
import GoogleAnalytics from './components/GoogleAnalytics'

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin]
});

const monda = Monda({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-monda'
})
const mada = Mada({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-mada'
})
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400' ,'600'],
  variable: '--font-kanit'
})

const metaTitle = 'Datos en Fuga | ¿Tu información está segura?'
const metaDescription = 'Queremos que el Estado asegure estándares de ciberseguridad y que  deje de perseguir hackers que realizan denuncias.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES_ROOT || 'https://democraciaenred.github.io/datosenfuga-next/'),
  title: metaTitle,
  description: metaDescription,
  colorScheme: 'dark',
  openGraph: {
    title: metaTitle,
    description: metaDescription
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={`${monda.variable} ${kanit.variable} ${mada.className} flex flex-col min-h-[100vh] text-white`}>
        <NavBar />
        {children}
        <ScrollTopButton />
      </body>
    </html>
  )
}
