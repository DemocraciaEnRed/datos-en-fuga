import type { Metadata } from 'next'
import cases from "./_cases.js"
import CaseSelector from './components/CaseSelector'
import HowToReport from './components/HowToReport'
import CasesHeader from './components/CasesHeader'
import CasesDescription from './components/CasesDescriptions'


const metaTitle = 'Casos | Datos en Fuga'
const metaDescription = 'Conoce más sobre los casos y consecuencias de los #DatosEnFuga'

const allKeywords = cases
  .map(c => [c.name, c.year, ...c.keywords])
  .reduce((acc, currentArray) => {
    return acc.concat(currentArray);
  }, []);

const keywords = Array.from(new Set([...allKeywords,'Ciberseguridad']))

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: keywords || 'Ciberseguridad',
  openGraph: {
    title: metaTitle,
    description: metaDescription
  }
}

const Casos = () => {
  return (
    <main>
      <CasesHeader />
      <section className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-2xl sm:text-4xl bg-[#CC4356] py-4 pl-8 sm:pl-[65px] md:pl-[130px] pr-5 inline-block font-extrabold text-white'>LLEGÓ TARDE PARA ELLOS</h2>
        <p className='font-nippo text-der-black text-xl pl-8 sm:pl-[65px] md:pl-[130px] my-4 font-medium'>
          TE CONTAMOS QUIÉNES SON Y CUÁL ES SU HISTORIA
        </p>
        <CaseSelector cases={cases} id={cases[0].id} />
        <CasesDescription caso={cases[0]} />
      </section>
      <HowToReport />
    </main>
  )
}

export default Casos