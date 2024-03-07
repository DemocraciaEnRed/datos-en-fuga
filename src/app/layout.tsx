import type { Metadata } from 'next'
import { Inter, Lexend_Deca, Open_Sans, Raleway, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import NavBar from './components/NavBar'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import ScrollTopButton from './components/ScrollTopButton'
// import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin]
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})
const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca'
})
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

const metaTitle = 'Datos en Fuga | ¿Tu información está segura?'
const metaDescription = 'Queremos que el Estado asegure estándares de ciberseguridad y que  deje de perseguir hackers que realizan denuncias.'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  colorScheme: 'dark',
  openGraph:{
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
      <body className={`${nippo.variable} ${raleway.variable} ${roboto.variable} ${lexendDeca.variable} ${inter.variable} ${openSans.className} flex flex-col min-h-[100vh] text-white`}>
        <NavBar />
        {children}
        <ScrollTopButton />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
