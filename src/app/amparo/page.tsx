import React from 'react'
import Image from 'next/image'
import { cartoons } from '../../../public/amparo'
import amparoIcon from '../../../public/shared/amparo.png'

const Amparo = () => {
  return (
    <main>
      <header className='bg-[#2D2D2D] py-[8vh] px-[3vw] md:px-[6vw]'>
        <h1 className='font-nippo text-[29px] max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-[40px]'>
          <span className="font-extrabold">#CON</span>MIS<span className='font-extrabold'>DATOS</span>NO
        </h1>
        <p className='text-2xl max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-4xl'>
          PRESENTAMOS UN AMPARO CONTRA EL <br /> ESTADO PARA PROTEGER NUESTROS DATOS <br /> PERSONALES EN UN AÑO DE ELECCIONES.
        </p>
      </header>
      <section className='py-[3vh] px-5 h-4/6 bg-[#F1F1F1] text-black'>
        <h2 className='md:w-[65%] mx-auto text-center text-2xl font-nippo font-bold sm:text-4xl'>
          PRESENTAMOS UN AMPARO PARA PROTEGER NUESTROS DATOS PERSONALES Y NUESTRA DEMOCRACIA
        </h2>
        <div className='my-10'>
          <div className='flex flex-col overflow-scroll overflow-y-hidden w-full'>
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
        <p className='text-2xl font-extrabold font-nippo text-center sm:text-4xl'>¿Y QUÉ ES LO QUE PUEDE PASAR MIENTRAS SIGA VIGENTE?</p>
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
        <p className='text-2xl font-extrabold font-nippo mx-auto text-center md:w-[65%] my-6 sm:text-4xl'>PERO, ADEMÁS, EL USO DE DATOS PERSONALES TAMBIÉN AMENAZA LA DEMOCRACIA Y TIENE GRANDES ANTECEDENTES…</p>
        <div className='flex flex-col overflow-scroll overflow-y-hidden w-full my-5'>
          <Image
            alt="amparo"
            src={cartoons.desktop7}
            width={1600}
            height={420}
            className='w-auto h-96 max-w-none self-start md:h-auto md:w-full md:max-w-[1600px] md:self-center'
          />
        </div>
        <div className='flex flex-col overflow-scroll overflow-y-hidden w-full'>
          <Image
            alt="amparo"
            src={cartoons.desktop8}
            width={1600}
            height={420}
            className='w-auto h-96 max-w-none self-start md:h-auto md:w-full md:max-w-[1600px] md:self-center'
          />
        </div>
      </section>
      <section className='py-[8vh] bg-[#2D2D2D]'>
        <h2 className='font-nippo text-4xl bg-[#006482] py-4 pl-14 pr-5 inline-block font-extrabold max-[466px]:text-2xl'>¿QUÉ PRESENTAMOS?
        </h2>
        <div className='my-10 flex flex-row justify-center'>
          <div className='w-[610px] h-[360px] px-10 bg-[#F1F1F1] flex flex-col justify-around items-center text-black sm:w-[350px] max-[328px]:w-[200px]'>
            <p className='text-2xl font-extrabold'>AMPARO</p>
            <Image
              alt="icon"
              src={amparoIcon}
              height={96}
              width={96}
            />
            <p className='text-lg'>
              Este amparo pretende la derogación del decreto DA 410/18052, por que atenta contra la ley de datos personales hoy vigente en la constitución.
            </p>
            <a href="#reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#CC4356] text-white w-[300px] text-center font-extrabold">
              DESCARGA EL COSO
            </a>
          </div>
        </div>
        <p className='text-white text-center py-10 text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius accusamus quo repellat, incidunt voluptatem quam cupiditate expedita repudiandae et, hic dolor eligendi suscipit odit, atque saepe veniam aliquam explicabo id.
        </p>
      </section>
    </main>
  )
}

export default Amparo