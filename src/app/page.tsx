import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-5">
      <h1 className='text-4xl font-extrabold mb-16 mt-16 text-center'>CIBERINCIDENTES EN ARGENTINA</h1>
      <div className='flex flex-row gap-5 w-[90vw] max-lg: max-lg:flex-col max-lg:items-center'>
        <div className="flourish-embed w-[60%] max-lg:w-full" data-src="story/1969359">
          <Script src="https://public.flourish.studio/resources/embed.js" />
        </div>
        <div className='w-[40%] flex flex-col text-center max-lg:w-full'>
          <h3 className='font-bold text-4xl mb-11'>GLOSARIO Y REFERENCIAS</h3>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-2xl'>Término</p>
            </div>
            <div>
              <p className='text-2xl'>Definición</p>
            </div>
          </div>
          <div className='grid grid-cols-2 items-center gap-y-4 h-[90%]'>
            <div className='flex justify-center items-center'>
              <Image
                alt="desconocido"
                src="/home/desconocido.png"
                width={106}
                height={64}
              />
            </div>
            <div>No se da suficiente información en el artículo para determinar el tipo de ataque.</div>
            <div className='flex justify-center'>
              <Image
                alt="databreach"
                src="/home/databreach.png"
                width={106}
                height={64}
              />
            </div>
            <div>Incidente de seguridad en el que un externo accede de manera no autorizada a información confidencial.</div>
            <div className='flex justify-center'>
              <Image
                alt="ransomware"
                src="/home/ransomware.png"
                width={106}
                height={64}
              />
            </div>
            <div>Es un tipo de código malicioso que impide la utilización de los equipos o sistemas, secuestrando la información de las víctimas hasta que se pague un rescate.</div>
            <div className='flex justify-center'>
              <Image
                alt="incidente"
                src="/home/incidente.png"
                width={106}
                height={64}
              />
            </div>
            <div>Cualquier situación o comportamiento adverso de un software informático</div>
          </div>
        </div>
      </div>

    </main>
  )
}
