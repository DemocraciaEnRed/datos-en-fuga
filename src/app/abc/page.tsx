import { subtopics, iframes, resources } from './_data'
// import VideosSLider from "../components/VideosSLider"
// import Resource from "./components/Resource"
import amparoIcon from '../../../public/shared/amparo.png'
import SubtopicsMap from "./components/SubtopicsMap"
import Image from 'next/image'
// import Link from 'next/link'
import { Metadata } from 'next'
import ResourcesListItem from './components/ResourcesListItem'

const metaTitle = 'ABC | Datos en Fuga'
// const metaDescription = 'Conoce más sobre los casos y consecuencias de los #DatosEnFuga'

export const metadata: Metadata = {
    title: metaTitle,
    //   description: metaDescription,
    openGraph: {
        title: metaTitle,
        // description: metaDescription
    }
}

const page = () => {
    return (
        <main>
            <header className="py-[6vw] md:py-[3vw] px-8 sm:px-[65px] md:px-[130px] bg-der-black">
                <h1 className="font-kanit text-3xl sm:text-4xl font-bold">La ciberseguridad no es un tema tabú</h1>
            </header>
            <section className="py-[6vw] md:py-[3vw] px-8 sm:px-[65px] md:px-[130px] bg-gray-100 text-der-black">
                <SubtopicsMap subtopics={subtopics} />
            </section>
            <section className="py-[6vw] md:py-[3vw] px-8 sm:px-[65px] md:px-[130px] bg-gray-100 text-der-black text-lg">
                <h2 className="font-kanit text-2xl sm:text-3xl font-bold">Recursos útiles</h2>
                <div className='flex flex-col justify-center items-center bg-white text-black shadow-xl rounded-lg my-[3vw] p-6 gap-5'>
                    <p className='text-xl font-bold'>AMPARO</p>
                    <Image
                        alt="icon"
                        src={amparoIcon}
                        height={96}
                        width={96}
                    />
                    <p className='text-center text-xl font-kanit'>
                        Presentamos un amparo colectivo contra el Estado solicitando el pronunciamiento de inconstitucionalidad de la DA 431/2020 y de determinados artículos de Ley de Datos Personales, y solicitando se dicte una medida cautelar que ordena la suspensión de lo que disponen para evitar la transferencia y el mal uso de nuestros datos personales.
                    </p>
                    <div className='flex justify-center items-center gap-5 flex-wrap'>
                        <a href="https://drive.google.com/file/d/1E98MIeIvUPRuz2jz_EODQy4TKd3Xahnw/view" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
                            <p className='font-bold uppercase'>amparo</p>
                            <p className='font-light text-sm'>Abril 2023</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1kw6bYhov5m9-YloW4B5_d8OiasdJzIwO/view" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
                            <p className='font-bold uppercase'>gacetilla amparo</p>
                            <p className='font-light text-sm'>Abril 2023</p>
                        </a>
                    </div>
                    <div className='flex justify-center items-center gap-5 flex-wrap'>
                        <a href="https://drive.google.com/file/d/1Fgt4WNEfsCTEZMi-f6pKDXkfWBnj9jet/view?usp=drive_link" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
                            <p className='font-bold uppercase'>sentencia</p>
                            <p className='font-light text-sm'>Junio 2024</p>
                        </a>
                        <a href="https://drive.google.com/file/d/18OvsTaKZV5PkJONvuVuESCgHdt6TbRZj/view?usp=drive_link" target='_blank' type="button" className="border-2 border-[#CC4356] rounded-xl p-1 bg-[#CC4356] text-white w-[295px] text-center">
                            <p className='font-bold uppercase'>gacetilla sentencia</p>
                            <p className='font-light text-sm'>Junio 2024</p>
                        </a>
                    </div>
                </div>
                <div className='text-lg font-kanit mx-auto text-black mb-[3vw]'>
                    <h3 className='font-bold underline uppercase mb-3'>estado:</h3>
                    <p className='text-lg mb-3'>El amparo colectivo que presentamos en abril de 2023 contra el Estado Nacional, el 7 este mes, luego de mas de un año, tuvo sentencia de segunda instancia de la que la Sala V, del Fuero Contencioso Administrativo Federal, en la que se pronunció a favor nuestro, contrario a la sentencia de primera instancia, y ordeno al Estado Nacional a que presente un plan de borrado integral de las bases de datos creadas a partir de la aplicación <a href="http://cuidar.ar/" target="_blank" rel="noopener noreferrer">Cuid.Ar</a>.</p>
                    <p className='font-extralight'>Última actualización: junio 2024</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {resources.map((rsrc, i) => <ResourcesListItem key={'rsrcList' + i} rsrc={rsrc} />)}
                </div>
            </section>
            {/* <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black text-lg">
                <h2 className="font-kanit text-5xl font-bold uppercase">videos informativos</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section> */}
        </main >
    )
}
export default page