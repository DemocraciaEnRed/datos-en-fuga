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
  const metaTitle = `Caso ${caso?.name} | Datos en Fuga`;
  const metaDescription = caso?.description
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${caso?.name}, ${caso?.year}, ciberseguridad, ${caso?.keywords.join(', ')}`,
    openGraph: {
      title: metaTitle,
      description: metaDescription
    }
  }
}

const getCaso = (id: string) => cases.find((c) => c.id === id)

const ID = ({ params }: { params: { id: string } }) => {
  const { id } = params
  let caso = getCaso(id)

  !caso && notFound()

  return (
    <main>
      <CasesHeader />
      <section className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-kanit text-2xl sm:text-4xl bg-[#CC4356] py-4 pl-8 sm:pl-[65px] md:pl-[130px] pr-5 inline-block font-extrabold text-white'>LLEGÓ TARDE PARA ELLOS</h2>
        <p className='font-kanit text-der-black text-xl pl-8 sm:pl-[65px] md:pl-[130px] my-4 font-medium'>
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
