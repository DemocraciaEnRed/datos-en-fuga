import React from 'react'
import Image from "next/image"
import CaseSelector from './components/CaseSelector'
import cases from "./_cases.js"
import HowToReport from './components/HowToReport'

export async function generateStaticParams() {
  return cases.map((caso: any) => {
    return { id: caso.id }
  })
}

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
        <h2 className='font-nippo text-6xl bg-[#CC4356] py-4 pl-[4vw] md:pl-14 pr-5 inline-block font-extrabold max-[500px]:text-4xl max-[375px]:text-3xl'>ELLOS, NO LO SABÍAN</h2>
        <p className='font nippo text-der-black text-xl pl-12 my-4 font-medium'>
          TE CONTAMOS QUIÉNES SON Y CUÁL ES SU HISTORIA
        </p>
        <CaseSelector />
      </div>
      <HowToReport />
    </section>
  )
}

export default Casos