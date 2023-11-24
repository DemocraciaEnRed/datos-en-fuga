import type { Metadata } from 'next'
import { Inter, Open_Sans, Raleway, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import NavBar from './components/NavBar'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import ScrollTopButton from './components/ScrollTopButton'
import Footer from './components/Footer'

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin]
});

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto'
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})
const nippo = localFont({
  src: [
    {
      path: './fonts/NIPPO-EXTRALIGHT.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/NIPPO-LIGHT.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NIPPO-REGULAR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NIPPO-MEDIUM.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NIPPO-BOLD.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nippo',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Datos en Fuga | ¿Tu información está segura?',
  description: 'Queremos que el Estado asegure estándares de ciberseguridad y que  deje de perseguir hackers que realizan denuncias.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body className={`${nippo.variable} ${raleway.variable} ${roboto.variable} ${openSans.className} ${inter.className}`}>
        <NavBar />
        {children}
        <ScrollTopButton/>
        <Footer/>
      </body>
    </html>
  )
}
