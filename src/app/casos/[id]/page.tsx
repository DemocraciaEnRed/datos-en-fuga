import cases from "../_cases"
import CaseSelector from '../components/CaseSelector'
import HowToReport from '../components/HowToReport'
import CasesDescription from '../components/CasesDescriptions'
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"

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
      <header className='bg-[#2D2D2D] py-[8vh] px-10 h-4/6'>
        <h1 className='font-nippo text-5xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-2xl'>
          ¿SABÍAS QUE EN ARGENTINA <br /> <span className="font-bold">HAY UNA MANERA SEGURA DE REPORTAR VULNERABILIDADES INFORMÁTICAS?</span>
        </h1>
        <div className="flex flex-row gap-4 text-lg my-3">
          <a href="#reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#CC4356] text-white w-[300px] text-center font-extrabold">
            ¿CÓMO REPORTAR?
          </a>
          <a href="#reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#2D2D2D] text-[#CC4356] w-[300px] text-center font-extrabold">
            CASOS
          </a>
        </div>
      </header>

      <section className='bg-[#F1F1F1] py-[3vh] h-4/6'>
        <h2 className='font-nippo text-5xl bg-[#CC4356] py-4 pl-14 pr-5 inline-block font-extrabold'>LLEGÓ TARDE PARA ELLOS</h2>
        <p className='font-nippo text-der-black text-xl pl-12 my-4 font-medium'>
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
