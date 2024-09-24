import Image from "next/image"
import { otherLogos } from '~/reporta/'

const HowToReport = () => {
    return (
        <section className='bg-[#2D2D2D] py-[3vh] h-4/6' id='reporta'>
            <h2 className='font-kanit text-2xl sm:text-4xl bg-[#008BB4] py-4 pr-5 pl-8 sm:pl-[65px] md:pl-[130px] inline-block font-extrabold w-[90%] max-[375px]:text-3xl lg:w-auto mb-12'>¿QUÉ Y CÓMO REPORTAR?
            </h2>

            <div className="flex flex-col justify-center items-center">
                <p className='text-left mx-8 sm:mx-[65px] md:mx-[130px]'>
                    La Fundación Via Libre recibe informes sobre fallos en aplicaciones que puedan afectar los derechos de las personas, especialmente la seguridad de sus datos personales. Si encuentras vulnerabilidades, como la posibilidad de extracción o modificación no autorizada de datos, o identificas versiones obsoletas o inseguras de software, este es el lugar para informarlo.
                </p>
                <div className='w-[850px] h-auto bg-[#D9D9D9] flex flex-col items-center rounded-md my-10 p-6 max-[856px]:w-[600px] max-[610px]:w-[90vw] mx-auto'>
                    <Image
                        src={otherLogos.lupa}
                        alt="Reportá logo"
                        width={227}
                        height={271}
                        className='w-28 my-8'
                    />
                    <p className='uppercase text-lg font-bold text-center px-4 text-der-black'>
                        Todos los esfuerzos técnicos son importantes para conservar datos personales a través de los reportes realizados
                    </p>

                    <a href="/reporta" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 mt-4 bg-[#CC4356] text-white w-[300px] text-center text-lg font-bold">
                        ¿QUÉ Y CÓMO REPORTAR?
                    </a>
                </div>
            </div>
        </section>
    )
}
export default HowToReport