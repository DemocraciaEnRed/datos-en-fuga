import Image from "next/image"
import { otherLogos } from '~/reporta/'

const HowToReport = () => {
    return (
        <div className='bg-[#2D2D2D] py-[3vh] h-4/6'>
            <h2 className='font-nippo text-5xl bg-[#008BB4] py-4 pl-14 pr-5 inline-block font-extrabold w-[90%] max-[375px]:text-3xl lg:w-auto'>ENTONCES, <br />
                ¿QUÉ Y CÓMO PUEDO REPORTAR?
            </h2>

            <div className="flex flex-col justify-center items-center my-12 mx-3">
                <p className='text-left w-[850px] text-2xl max-[860px]:w-[400px] max-[375px]:w-[250px]'>
                    Según la ley de datos personales, que establece xxxxxxxx, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='w-[850px] h-[340px] bg-[#D9D9D9] flex flex-col items-center rounded-md my-10 max-[856px]:w-[600px] max-[856px]:h-[400px] max-[610px]:w-[310px] max-[610px]:h-[550px]'>
                    <Image
                        src={otherLogos.lupa}
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
    )
}
export default HowToReport