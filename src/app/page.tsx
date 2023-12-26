'use client'
import Image from 'next/image'
import SiteMapFooter from "./components/SiteMapFooter"
import LandingFlourish from './components/LandingFlourish'
import Link from 'next/link'
import { flourishImages } from "~/home/index"
import { useState } from 'react'

export default function Home() {

  const [showText, setShowText] = useState(true)

  return (
    <main>
      <div className="relative text-black">
        <video className='w-full' autoPlay loop muted>
          <source src="https://democraciaenred.github.io/datosenfuga-next/home/background.mp4" type="video/mp4" className='w-full' />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1 className="text-6xl font-extrabold mb-4 max-md:text-4xl">#DATOSENFUGA</h1>
          <h2 className="font-nippo text-5xl max-md:text-3xl">¿QUÉ ESTÁ PASANDO EN ARGENTINA?</h2>
        </div>
      </div>
      <div className='bg-white text-black text-center flex flex-col items-center justify-center py-12 w-full'>
        <h2 className='font-bold text-4xl'>¿QUÉ ES #DATOSENFUGA</h2>
        <p className='uppercase'>Cuidar tus datos no solo depende de que tengas una contraseña segura</p>
        <div className='flex flex-row  flex-wrap justify-around gap-4 my-12 text-white  w-1/2'>
          <div
            className="h-[260px] w-[389px] bg-[#CC4356] flex flex-col justify-center items-center rounded-md max-[584px]:min-w-[300px] relative overflow-hidden"
            onMouseEnter={() => setShowText(false)}
            onMouseLeave={() => setShowText(true)}
          >
            <div className={`text-white text-center transition-all duration-500 ease-in-out transform ${showText ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-500 ease-in-out transform flex items-center flex-col my-8 max-[768px]:my-4">
              <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
                <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
              </div>
              <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
                <p className='uppercase text-sm my-2'>
                  Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[260px] w-[389px] bg-[#008BB4] flex flex-col justify-center rounded-md max-[584px]:min-w-[300px]">
            <div>
              <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
            </div>
            <div>
              <p className='uppercase text-sm my-2'>
                Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="h-[260px] w-[389px] bg-[#00D79E] flex flex-col justify-center rounded-md max-[584px]:min-w-[300px]">
            <div>
              <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
            </div>
            <div>
              <p className='uppercase text-sm my-2'>
                Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-4xl font-bold my-12 text-center'>CIBERINCIDENTES EN ARGENTINA</h2>
      <div className='pb-11 flex flex-row gap-14 w-[90vw] mx-auto max-lg: max-lg:flex-col max-lg:items-center'>
        <LandingFlourish />
        <div className='w-[40%] flex flex-col max-lg:w-full'>
          <h3 className='font-bold text-xl mb-11 text-center'>GLOSARIO Y REFERENCIAS</h3>
          <div className='grid grid-cols-1 items-center'>
            <div className='flex justify-center items-center py-4 gap-5 md:gap-10'>
              <p className='w-[128px] text-center font-bold'>Término</p>
              <p className='flex-grow text-center font-bold'>Definición</p>
            </div>
            <div className='flex justify-center items-center py-4 gap-5 md:gap-10'>
              <Image
                alt="desconocido"
                src={flourishImages.desconocido}
                className='w-[128px]'
                width={106}
                height={64}
              />
              <div className="flex-grow text-left">No se da suficiente información en el artículo para determinar el tipo de ataque.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-5 md:gap-10'>
              <Image
                className='w-[128px]'
                alt="databreach"
                src={flourishImages.databreach}
                width={106}
                height={64}
              />
              <div className="flex-grow text-left">Incidente de seguridad en el que un externo accede de manera no autorizada a información confidencial.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-5 md:gap-10'>
              <Image
                className='w-[128px]'
                alt="ransomware"
                src={flourishImages.ransomware}
                width={128}
                height={78}
              />
              <div className="flex-grow text-left">Es un tipo de código malicioso que impide la utilización de los equipos o sistemas, secuestrando la información de las víctimas hasta que se pague un rescate.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-5 md:gap-10'>
              <Image
                className='w-[128px]'
                alt="incidente"
                src={flourishImages.incidente}
                width={106}
                height={64}
              />
              <div className="flex-grow text-left">Cualquier situación o comportamiento adverso de un software informático</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-[#FAFAFA] text-[#212121] h-[600px] max-lg:flex-col">
        <div className="w-1/2 h-full bg-[url('/home/DER.png')] bg-center bg-no-repeat bg-cover max-lg:w-full" >

        </div>
        <div className="w-full lg:w-[50%] py-2 my-11 px-11 max-lg:w-full">
          <h2 className='text-4xl font-bold text-[#4C4C4E]'>Acerca de</h2>
          <p className="text-sm my-8">
            Queremos que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados. Queremos que el Estado deje de perseguir penalmente a quienes identifican, denuncian y reportan vulnerabilidades informáticas.
          </p>
          <Link href="/about" type="button" className="border-full border-[#212121] rounded-full py-4 px-16 bg-[#212121] text-white w-auto text-center uppercase text-lg">
            <span>Conocé más  </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" align-text-bottom inline w-5 h-5">
              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="px-[5vw] mx-auto bg-der-black">
        <SiteMapFooter />
      </div>
    </main >
  )
}
