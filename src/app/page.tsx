import Image from 'next/image'
import Script from 'next/script'
import SiteMapFooter from "./components/SiteMapFooter"
import LandingFlourish from './components/LandingFlourish'




export default function Home() {
  const flourish = <div className="flourish-embed w-[60%] max-lg:w-full" data-src="story/1969359">
    <Script src="https://public.flourish.studio/resources/embed.js" />
  </div>
  return (
    <main>
      <div className="text-black">
        <video className='w-[100vw]' autoPlay loop muted>
          <source src="/home/background.mp4" type="video/mp4" className='w-full' />
        </video>
        {/* <h1 className="z-20 text-center absolute top-1/2 w-full">#DATOSENFUGA</h1>
        <h2 className="z-20 text-center absolute top-1/2 w-full">¿QUÉ ESTÁ PASANDO EN ARGENTINA?</h2> */}
      </div>
      <h2 className='text-4xl font-extrabold my-12 text-center'>CIBERINCIDENTES EN ARGENTINA</h2>
      <div className='pb-11 flex flex-row gap-14 w-[90vw] mx-auto max-lg: max-lg:flex-col max-lg:items-center'>
        <LandingFlourish />
        <div className='w-[40%] flex flex-col max-lg:w-full'>
          <h3 className='font-bold text-xl mb-11 text-center'>GLOSARIO Y REFERENCIAS</h3>
          <div className='grid grid-cols-1 items-center'>
            <div className='flex justify-center items-center py-4 gap-10'>
              <p className='w-[128px] text-center'>Término</p>
              <p className='flex-grow text-center'>Definición</p>
            </div>
            <div className='flex justify-center items-center py-4 gap-10'>
              <Image
                alt="desconocido"
                src="/home/desconocido.png"
                className='w-[128px]'
                width={106}
                height={64}
              />
              <div className="flex-grow text-left">No se da suficiente información en el artículo para determinar el tipo de ataque.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-10'>
              <Image
                className='w-[128px]'
                alt="databreach"
                src="/home/databreach.png"
                width={106}
                height={64}
              />
              <div className="flex-grow text-left">Incidente de seguridad en el que un externo accede de manera no autorizada a información confidencial.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-10'>
              <Image
                className='w-[128px]'
                alt="ransomware"
                src="/home/ransomware.png"
                width={128}
                height={78}
              />
              <div className="flex-grow text-left">Es un tipo de código malicioso que impide la utilización de los equipos o sistemas, secuestrando la información de las víctimas hasta que se pague un rescate.</div>
            </div>
            <div className='flex justify-center items-center border-t-2 border-t-white py-4 gap-10'>
              <Image
                className='w-[128px]'
                alt="incidente"
                src="/home/incidente.png"
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
          <h2 className='text-4xl font-bold'>Acerca de</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tenetur exercitationem quia velit inventore quas harum, deserunt, nam mollitia odit, ullam itaque. Obcaecati nulla eaque quisquam fugit culpa optio ea!
          </p>
          <a href="#" type="button" className="border-full border-[#212121] rounded-full p-2 bg-[#212121] text-white w-[150px] text-center uppercase text-xs my-5">
            Conocé más
          </a>
        </div>
      </div>
      <div className="px-[5vw] mx-auto bg-der-black">
        <SiteMapFooter />
      </div>
    </main>
  )
}
