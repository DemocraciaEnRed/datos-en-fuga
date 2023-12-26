'use client'
import { useState } from "react"

const LandingTopics = () => {
    const [showText, setShowText] = useState(true)
    return (
        <div className='bg-white text-black text-center flex flex-col items-center justify-center py-12 w-full'>
            <h2 className='font-bold text-4xl'>¿QUÉ ES #DATOSENFUGA</h2>
            <p className='uppercase'>Cuidar tus datos no solo depende de que tengas una contraseña segura</p>
            <div className='flex flex-row  flex-wrap justify-around gap-4 my-12 text-white  w-1/2'>
                <div
                    className="h-[260px] w-[389px] bg-[#CC4356] flex flex-col justify-center items-center rounded-md max-[584px]:min-w-[300px] relative overflow-hidden"
                    onMouseEnter={() => setShowText(false)}
                    onMouseLeave={() => setShowText(true)}
                >
                    <div className={`text-white text-center transition-all duration-500 ease-in-out transform ${showText ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                        <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-500 ease-in-out transform flex items-center flex-col my-8 max-[768px]:my-4">
                        <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
                            <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
                            <p className='uppercase text-sm my-2'>
                                Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[260px] w-[389px] bg-[#008BB4] flex flex-col justify-center rounded-md max-[584px]:min-w-[300px]">
                    <div>
                        <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
                    </div>
                    <div>
                        <p className='uppercase text-sm my-2'>
                            Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
                        </p>
                    </div>
                </div>
                <div className="h-[260px] w-[389px] bg-[#00D79E] flex flex-col justify-center rounded-md max-[584px]:min-w-[300px]">
                    <div>
                        <p className='uppercase text-3xl font-bold'>Ley de datos personales</p>
                    </div>
                    <div>
                        <p className='uppercase text-sm my-2'>
                            Nuestro área de Aseguramiento de Procesos Informáticos (API) está conformada por seis factores de servicio, que apoyan desde la ciberseguridad y la tecnología al marco de gobierno corporativo de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingTopics