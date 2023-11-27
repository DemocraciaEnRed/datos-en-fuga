import { subtopics, resources, iframes, items } from './_data'
import VideosSLider from "../components/VideosSLider"
// import Resource from "./components/Resource"
import amparoIcon from '../../../public/shared/amparo.png'
import SubtopicsMap from "./components/SubtopicsMap"
import Image from 'next/image'

const page = () => {
    return (
        <main>
            <header className="p-[6vw] md:p-[3vw] bg-der-black">
                <h1 className="font-nippo text-5xl font-bold uppercase">Lo que siempre quisiste saber del tema y no te animaste a preguntar</h1>
            </header>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black">
                <SubtopicsMap subtopics={subtopics} />
            </section>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black text-lg">
                <h2 className="font-nippo text-5xl font-bold uppercase">recursos útiles</h2>
                <div className='flex flex-col justify-center items-center bg-white text-black shadow-md rounded-lg my-[3vw] p-6 gap-5'>
                    <p className='text-2xl font-bold'>AMPARO</p>
                    <Image
                        alt="icon"
                        src={amparoIcon}
                        height={96}
                        width={96}
                    />
                    <p className='text-2xl font-nippo'>
                        Presentamos un amparo colectivo solicitando el pronunciamiento de inconstitucionalidad de la DA 431/2020 y de determinados artículos de Ley de Datos Personales (art. 5, inc. 2 ap. b - ley 25.326) y solicitando se dicte una medida cautelar que ordena la suspensión de lo que disponen. Estas normas habilitan la transferencia de los datos personales de los ciudadanos entre todas las dependencias de la Administración pública, sin contar con el consentimiento expreso de sus titulares para su tratamiento.
                    </p>
                    <div className='flex justify-center items-center gap-5 flex-wrap'>
                        <a href="#" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 bg-[#CC4356] text-white w-[295px] text-center font-bold uppercase">
                            descargar amparo
                        </a>
                        <a href="#" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 bg-[#CC4356] text-white w-[295px] text-center font-bold uppercase">
                            descargar gacetilla
                        </a>
                    </div>
                </div>
                <div className='text-lg font-nippo mx-auto text-black mb-[3vw]'>
                    <h3 className='font-bold underline uppercase mb-3'>estado:</h3>
                    <p className='text-lg mb-3'>El amparo colectivo se presento el 18 de abril de 2023 y radica en el juzgado Contencioso Administrativo Federal N 8, a cargo de la Jueza Dra. María Cecilia GILARDI MADARIAGA de NEGRE. Luego de 5 meses, el 07/09/2023, la Sra. Jueza se pronuncio sobre la medida cautelar solicitada por nosotros y rechazo la misma. Este rechazo fue apelado por nosotros y  desde el 11 de septiembre aguardamos que la Sala V del mismo fuero revise la decisión del Juzgado de origen y nos conceda la medida cautelar.</p>
                    <p className='font-extralight'>Ultima actualización: 21/11/2023</p>
                </div>
                {/* <div className={`grid grid-cols-1 md:grid-cols-2 ${resources.length > 2 && 'lg:grid-cols-3'} gap-5 mb-5 mt-[6vw] md:mt-[3vw]`}>
                    {resources.map((resource, i) =>
                        <Resource key={'resrc' + i} resource={resource} />
                    )}
                </div> */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${resources.length > 2 && 'lg:grid-cols-3'} gap-5`}>
                    {items.map((item, i) =>
                        <button key={'iList' + i} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <p className="border-l-8 border-red-600 py-2 pl-4 text-left uppercase" >{item.title}</p>
                        </button>
                    )}
                </div>
            </section>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black text-lg">
                <h2 className="font-nippo text-5xl font-bold uppercase">videos informativos</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section>
        </main >
    )
}
export default page