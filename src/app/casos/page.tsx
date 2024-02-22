import type { Metadata } from 'next'
import cases from "./_cases.js"
import CaseSelector from './components/CaseSelector'
import HowToReport from './components/HowToReport'
import CasesHeader from './components/CasesHeader'


export const metadata: Metadata = {
  title: 'Casos | Datos en Fuga',
  description: 'Conoce más sobre los casos y consecuencias de los #DatosEnFuga',
}

const Casos = () => {
  return (
    <main>
      <CasesHeader/>
      <section className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-5xl bg-[#CC4356] py-4 pl-10 sm:pl-14 pr-5 inline-block font-extrabold text-white'>LLEGÓ TARDE PARA ELLOS</h2>
        <p className='font-nippo text-der-black text-xl px-10 sm:pl-12 my-4 font-medium'>
          TE CONTAMOS QUIÉNES SON Y CUÁL ES SU HISTORIA
        </p>
        <CaseSelector cases={cases} />
      </section>
      <HowToReport />
    </main>
  )
}

export default Casos