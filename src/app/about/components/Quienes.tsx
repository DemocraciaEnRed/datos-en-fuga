import Image from "next/image"
import logosNPO from "../../../../public/about/index"
const Quienes = () => {
    const npo = [
        {
            name: 'Democracia en Red',
            description: 'Democracia en Red es una ONG latinoamericana de Buenos Aires, Argentina, para el mundo.',
            img: logosNPO.DER,
            url: ''
        },
        {
            name: 'O.D.I.A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: logosNPO.ODIA,
            url: ''
        },
        {
            name: 'Vía Libre',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: logosNPO.VL,
            url: ''
        },
        {
            name: 'INDELA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: logosNPO.INDELA,
            url: ''
        },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {npo.map((org, i) => {
                return (
                    <div key={'aboutorgs' + i} className="flex flex-col justify-between text-center items-center gap-5 p-5">
                        <Image src={org.img} alt={`Logo ${org.name}`} width={80} height={80} />
                        <h4 className="text-base font-bold uppercase text-center">{org.name}</h4>
                        <p className="flex-grow">{org.description}</p>
                        <a href={org.url} target="_blank" type="button" className="border-2 border-[#CC4356] rounded-xl px-[18px] py-3 bg-[#CC4356] text-white text-center text-lg font-bold">
                            VISITÁ LA WEB
                        </a>
                    </div>
                )
            })}
            <div>

            </div>
        </div>
    )
}
export default Quienes