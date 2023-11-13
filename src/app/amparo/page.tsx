import React from 'react'
import Image from 'next/image'

const Amparo = () => {
  return (
    <section>
      <div className='bg-[#2D2D2D] py-[8vh] px-10'>
        <h1 className='font-nippo text-5xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-2xl'>
          <span className="font-extrabold">#CON</span>MIS<span className='font-extrabold'>DATOS</span>NO
        </h1>
        <p className='text-5xl max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-2xl'>
          PRESENTAMOS UN AMPARO CONTRA EL <br/> ESTADO PARA PROTEGER NUESTROS DATOS <br /> PERSONALES EN UN AÑO DE ELECCIONES.
        </p>
      </div>
      <div className='py-[3vh] px-5 h-4/6 bg-[#F1F1F1] text-black'>
        <h2 className='w-[70%] mx-auto text-center text-5xl font-nippo font-bold max-[376px]:text-2xl'>
          PRESENTAMOS UN AMPARO PARA PROTEGER NUESTROS DATOS PERSONALES Y NUESTRA DEMOCRACIA
        </h2>
        <div className='my-10 flex flex-col justify-center items-center'>
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop1.png"
            width={1600}
            height={621}
          />
          <Image 
          alt="amparo"
          src="/amparo/desktop/desktop2.png"
          width={1600}
          height={621}
        />
        </div>
        <p className='text-5xl font-extrabold font-nippo text-center'>¿Y QUÉ ES LO QUE PUEDE PASAR MIENTRAS SIGA VIGENTE?</p>
        <div className='my-7 flex flex-row flex-wrap gap-2 w-[80%] items-center justify-center mx-auto'>
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop3.png"
            width={535}
            height={456}
          />
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop4.png"
            width={535}
            height={456}
          />
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop5.png"
            width={535}
            height={456}
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
        <Image 
            alt="amparo"
            src="/amparo/desktop/desktop6.png"
            width={1600}
            height={420}
            className='hidden md:block'
          />
          <Image 
            alt="amparo"
            src="/amparo/mobile/mobile6.png"
            width={300}
            height={334}
            className='block md:hidden'
          />
        </div>
        <p className='text-5xl font-extrabold font-nippo mx-auto text-center w-[65%] my-6'>PERO, ADEMÁS, EL USO DE DATOS PERSONALES TAMBIÉN AMENAZA LA DEMOCRACIA Y TIENE GRANDES ANTECEDENTES…</p>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop8.png"
            width={1600}
            height={420}
          />
          <Image 
            alt="amparo"
            src="/amparo/desktop/desktop9.png"
            width={1600}
            height={420}
          />
        </div>
      </div>
      <div className='py-[8vh] bg-[#2D2D2D]'>
        <h2 className='font-nippo text-5xl bg-[#006482] py-4 pl-14 pr-5 inline-block font-extrabold max-[466px]:text-2xl'>¿QUÉ PRESENTAMOS?
        </h2>
        <div className='my-10 flex flex-row justify-center'>
          <div className='w-[610px] h-[360px] px-10 bg-[#F1F1F1] flex flex-col justify-around items-center text-black max-[375px]:w-[350px] max-[328px]:w-[200px]'>
            <p className='text-2xl font-extrabold'>AMPARO</p>
            <Image
              alt="icon"
              src="/amparo/icon.png"
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
      </div>
    </section>
  )
}

export default Amparo