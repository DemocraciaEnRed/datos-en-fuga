import React from 'react'
import Image from 'next/image'
import { cartoons } from '../../../public/amparo'
import amparoIcon from '../../../public/shared/amparo.png'
// import SiteMapFooter from '../components/SiteMapFooter'
import { Metadata } from 'next'

const metaTitle = 'Amparo | Datos en Fuga';
const metaDescription = 'Presentamos un amparo contra el Estado para proteger nuestros datos personales en un año de elecciones.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription
  }
}

const Amparo = () => {
  return (
    <main>
      <header className='bg-[#2D2D2D] py-[8vh] px-8 sm:px-[65px] md:px-[130px]'>
        <h1 className='font-kanit text-[29px] max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-[40px]'>
          <span className="font-extrabold">#Con</span>Mis<span className='font-extrabold'>Datos</span>No
        </h1>
        <p className='text-2xl max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-4xl font-kanit'>
          Presentamos un amparo contra el Estado para proteger nuestros datos personales en un año de elecciones.
        </p>
      </header>
      <section className='py-[4vh] px-8 sm:px-[65px] md:px-[130px] h-4/6 bg-[#F1F1F1] text-black'>
        <h2 className='md:w-[65%] mx-auto text-center text-2xl font-kanit font-bold sm:text-4xl'>
          PRESENTAMOS UN AMPARO PARA PROTEGER NUESTROS DATOS PERSONALES Y NUESTRA DEMOCRACIA
        </h2>
        <div className='my-10'>
          <div className='flex flex-col overflow-auto overflow-y-hidden w-full'>
            <Image
              alt="amparo"
              src={cartoons.desktop1}
              width={1600}
              height={621}
              className='w-auto h-96 max-w-none self-start md:h-auto md:w-full md:max-w-[1600px] md:self-center'
            />
          </div>
          <div className='flex justify-center items-center'>
            <Image
              alt="amparo"
              src={cartoons.desktop2}
              width={1600}
              height={621}
              className='hidden md:block w-full h-auto max-w-[1600px]'
            />
            <Image
              alt="amparo"
              src={cartoons.mobile2}
              width={535}
              height={456}
              className='block md:hidden w-full h-auto max-w-[535px]'
            />

          </div>
        </div>
        <p className='text-2xl font-extrabold font-kanit text-center sm:text-4xl'>¿Y QUÉ ES LO QUE PUEDE PASAR MIENTRAS SIGA VIGENTE?</p>
        <div className='my-7 flex flex-row flex-wrap gap-5 items-center justify-center mx-auto'>
          <Image
            alt="amparo"
            src={cartoons.desktop3}
            width={535}
            height={456}
            className='w-full h-auto max-w-[522px]'
          />
          <Image
            alt="amparo"
            src={cartoons.desktop4}
            width={535}
            height={456}
            className='w-full h-auto max-w-[522px]'
          />
          <Image
            alt="amparo"
            src={cartoons.desktop5}
            width={535}
            height={456}
            className='w-full h-auto max-w-[522px]'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image
            alt="amparo"
            src={cartoons.desktop6}
            width={1600}
            height={420}
            className='hidden md:block'
          />
          <Image
            alt="amparo"
            src={cartoons.mobile6}
            width={300}
            height={334}
            className='block md:hidden w-full h-auto max-w-[535px]'
          />
        </div>
        <p className='text-2xl font-extrabold font-kanit mx-auto text-center md:w-[65%] my-6 sm:text-4xl'>PERO, ADEMÁS, EL USO DE DATOS PERSONALES TAMBIÉN AMENAZA LA DEMOCRACIA Y TIENE GRANDES ANTECEDENTES…</p>
        <div className='flex flex-col overflow-auto overflow-y-hidden w-full my-5'>
          <Image
            alt="amparo"
            src={cartoons.desktop7}
            width={1600}
            height={420}
            className='w-auto h-96 max-w-none self-start md:h-auto md:w-full md:max-w-[1600px] md:self-center'
          />
        </div>
        <div className='flex flex-col overflow-auto overflow-y-hidden w-full'>
          <Image
            alt="amparo"
            src={cartoons.desktop8}
            width={1600}
            height={420}
            className='w-auto h-96 max-w-none self-start md:h-auto md:w-full md:max-w-[1600px] md:self-center'
          />
        </div>
      </section>
      <section className='py-[4vh] bg-der-black'>
        <h2 className='font-kanit text-4xl bg-[#006482] py-4 pl-8 sm:pl-[65px] md:pl-[130px] pr-5 inline-block font-extrabold max-[466px]:text-2xl'>¿QUÉ PRESENTAMOS?
        </h2>
        <div className='flex flex-col justify-center items-center w-[90vw] md:w-[75vw] max-w-[950px] bg-gray-100 text-black rounded-md mx-auto my-[3vw] p-6 gap-5'>
          <p className='text-2xl font-bold'>AMPARO</p>
          <Image
            alt="icon"
            src={amparoIcon}
            height={96}
            width={96}
          />
          <p className='text-center text-2xl font-kanit'>
            Presentamos un amparo colectivo contra el Estado solicitando el pronunciamiento de inconstitucionalidad de la DA 431/2020 y de determinados artículos de Ley de Datos Personales, y solicitando se dicte una medida cautelar que ordena la suspensión de lo que disponen para evitar la transferencia y el mal uso de nuestros datos personales.
          </p>
          <div className='flex justify-center items-center gap-5 flex-wrap'>
            <a href="https://drive.google.com/file/d/1E98MIeIvUPRuz2jz_EODQy4TKd3Xahnw/view" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
              <p className='font-bold uppercase'>amparo</p>
              <p className='font-light text-sm'>Abril 2023</p>
            </a>
            <a href="https://drive.google.com/file/d/1kw6bYhov5m9-YloW4B5_d8OiasdJzIwO/view" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
              <p className='font-bold uppercase'>gacetilla amparo</p>
              <p className='font-light text-sm'>Abril 2023</p>
            </a>
          </div>
          <div className='flex justify-center items-center gap-5 flex-wrap'>
            <a href="https://drive.google.com/file/d/1Fgt4WNEfsCTEZMi-f6pKDXkfWBnj9jet/view?usp=drive_link" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
              <p className='font-bold uppercase'>sentencia</p>
              <p className='font-light text-sm'>Junio 2024</p>
            </a>
            <a href="https://drive.google.com/file/d/18OvsTaKZV5PkJONvuVuESCgHdt6TbRZj/view?usp=drive_link" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
              <p className='font-bold uppercase'>gacetilla sentencia</p>
              <p className='font-light text-sm'>Junio 2024</p>
            </a>
          </div>
        </div>
        <div className='text-lg font-kanit mx-8 sm:mx-[65px] md:mx-[130px]'>
          <h3 className='font-bold underline uppercase mb-3'>estado:</h3>
          <p className='text-white text-lg mb-3'>El amparo colectivo que presentamos en abril de 2023 contra el Estado Nacional, el 7 este mes, luego de mas de un año, tuvo sentencia de segunda instancia de la que la Sala V, del Fuero Contencioso Administrativo Federal, en la que se pronunció a favor nuestro, contrario a la sentencia de primera instancia, y ordeno al Estado Nacional a que presente un plan de borrado integral de las bases de datos creadas a partir de la aplicación <a href="http://cuidar.ar/" target="_blank" rel="noopener noreferrer">Cuid.Ar</a>.</p>
          <p className='font-extralight'>Última actualización: junio 2024</p>
        </div>
      </section>
    </main>
  )
}

export default Amparo