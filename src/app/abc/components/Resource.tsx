import Image, { StaticImageData } from "next/image"

interface Resource {
    title: string,
    img: StaticImageData,
    description: string,
    btnLabel: string,
    url: string
}
const Resource = ({ resource }: { resource: Resource }) => {
    return (
        <div className="bg-white flex flex-col items-center justify-between h-full uppercase text-center shadow-md rounded-lg gap-4 p-5">
            <h3 className="text-bold text-2xl">{resource.title}</h3>
            <Image src={resource.img} alt="icono" />
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" type="button" className="border-2 border-[#CC4356] rounded-xl px-[18px] py-3 bg-[#CC4356] text-white text-center text-lg font-bold">
                {resource.btnLabel}
            </a>
        </div>
    )
}
export default Resource