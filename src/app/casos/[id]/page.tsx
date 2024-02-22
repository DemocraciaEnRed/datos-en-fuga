import cases from "../_cases"
import CaseSelector from '../components/CaseSelector'
import HowToReport from '../components/HowToReport'
import CasesDescription from '../components/CasesDescriptions'
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import CasesHeader from "../components/CasesHeader"

export async function generateStaticParams() {
  return cases.map((caso) => {
    return { id: caso.id }
  })
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const caso = getCaso(id)
  return {
    title: `Caso ${caso?.name} | Datos en Fuga`,
    description: caso?.description
  }
}

const getCaso = (id: string) => cases.find((c) => c.id === id)

const ID = ({ params }: { params: { id: string } }) => {
  const { id } = params
  let caso = getCaso(id)

  !caso && notFound()

  return (
    <main>
      <CasesHeader/>
      <section className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-5xl bg-[#CC4356] py-4 pl-10 sm:pl-14 pr-5 inline-block font-extrabold text-white'>LLEGÓ TARDE PARA ELLOS</h2>
        <p className='font-nippo text-der-black text-xl px-10 sm:pl-12 my-4 font-medium'>
          TE CONTAMOS QUIÉNES SON Y CUÁL ES SU HISTORIA
        </p>
        <CaseSelector cases={cases} id={id} />
        <CasesDescription caso={caso} />
      </section>
      <HowToReport />
    </main>
  )
}

export default ID
