import React from 'react'
import Image from "next/image"
import CaseSelector from './components/CaseSelector'

const Casos = () => {
  return (
    <section>
      <div className='bg-[#2D2D2D] py-[8vh] px-10 h-4/6'>
        <h1 className='font-nippo text-5xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-2xl'>
          ¿SABÍAS QUE EN ARGENTINA <br /> <span className="font-bold">HAY UNA MANERA SEGURA DE REPORTAR VULNERABILIDADES INFORMÁTICAS?</span>
        </h1>
        <div className="flex flex-row gap-4 text-lg my-3">
          <a href="#reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#CC4356] text-white w-[300px] text-center font-extrabold">
            ¿CÓMO REPORTAR SEGURO?
          </a>
          <a href="#reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#2D2D2D] text-[#CC4356] w-[300px] text-center font-extrabold flex items-center justify-center">
            CASOS
          </a>
        </div>
      </div>

      <div className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-5xl bg-[#CC4356] py-4 pl-14 pr-5 inline-block font-extrabold'>ELLOS, NO LO SABÍAN</h2>
        <p className='font nippo text-der-black text-xl pl-12 my-4 font-medium'>
          TE CONTAMOS QUIÉNES SON Y CUÁL ES SU HISTORIA
        </p>

        <div id="caseData">
          <CaseSelector />
        </div>
      </div>

      <div className='bg-[#2D2D2D] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-5xl bg-[#008BB4] py-4 pl-14 pr-5 inline-block font-extrabold max-[375px]:w-[250px] max-[375px]:text-3xl max-[375px]:w-full'>ENTONCES, <br />
          ¿QUÉ Y CÓMO PUEDO REPORTAR?
        </h2>

        <div className="flex flex-col justify-center items-center my-12 mx-3">
          <p className='mx-auto text-left w-[850px] text-2xl max-[860px]:w-[400px] max-[375px]:w-[250px]'>
            Según la ley de datos personales, que establece xxxxxxxx, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className='w-[850px] h-[340px] bg-[#D9D9D9] flex flex-col items-center rounded-md my-10 max-[856px]:w-[600px] max-[856px]:h-[400px] max-[610px]:w-[310px] max-[610px]:h-[550px]'>
            <Image
              src="/reporta/lupa.png"
              alt="Reportá logo"
              width={112}
              height={135}
              className='my-8'
            />
            <p className='text-2xl font-extrabold text-center px-4 text-der-black'>
              Todos los esfuerzos técnicos son importantes para conservar datos personales a través de los reportes realizados
            </p>

            <a href="/reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-4 bg-[#CC4356] text-white w-[300px] text-center text-lg font-bold">
              ¿CÓMO REPORTAR?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Casos