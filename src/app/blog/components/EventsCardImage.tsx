'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import notAvailable from "~/shared/not-available-card.png"


const EventsCardImage = ({ alter, sourceImg }: { alter: string | undefined, sourceImg: string | StaticImageData | undefined }) => {
    const [imgSrc, setImgSrc] = useState(sourceImg);

    return (
        <Image alt={alter || 'Portada de la novedad'} src={imgSrc || notAvailable}
            width={400} height={202} className="min-h-[150px] max-h-52 object-cover rounded-t-lg"
            placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPUrQcAAN8ArguAKQcAAAAASUVORK5CYII="
            onError={() => {
                setImgSrc(notAvailable);
            }} />
    )
}
export default EventsCardImage