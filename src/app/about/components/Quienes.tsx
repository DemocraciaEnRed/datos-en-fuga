import Image from "next/image"
import logosNPO from "../../../../public/about/index"

const Quienes = () => {
    const npo = [
        {
            name: 'Democracia en Red',
            img: logosNPO.DER,
            url: 'https://democraciaenred.org/'
        },
        {
            name: 'O.D.I.A',
            img: logosNPO.ODIA,
            url: 'https://odia.legal/'
        },
        {
            name: 'Vía Libre',
            img: logosNPO.VL,
            url: 'https://www.vialibre.org.ar/'
        }
    ]
    return (
        <div className="flex justify-evenly flex-wrap">
            {npo.map((org, i) => {
                return (
                    <div key={'aboutorgs' + i} className="flex flex-col justify-between text-center items-center gap-5 p-5">
                        <a href={org.url} target="_blank">
                            <Image className="rounded-full" src={org.img} alt={`Logo ${org.name}`} width={110} height={110} />    
                        </a>
                        <h4 className="text-base font-bold uppercase text-center">{org.name}</h4>
                        
                    </div>
                )
            })}
        </div>
    )
}
export default Quienes