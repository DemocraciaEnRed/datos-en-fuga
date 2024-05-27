"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const CaseItem = ({ c, id, previousCaseUrl, nextCaseUrl }:
    {
        c: any,
        id: string,
        previousCaseUrl: string,
        nextCaseUrl: string
    }) => {
    const [touchStart, setTouchStart] = useState(0)
    const router = useRouter()
    const handleTouch = (e: any) => {
        if (e.type === 'touchstart') {
            setTouchStart(e.changedTouches[0].clientX)
        }
        else if (e.type === "touchend") {
            const initialX = touchStart
            const currentX = e.changedTouches[0].clientX
            if (initialX + 200 > currentX) {
                router.push(nextCaseUrl, { scroll: false })
            } else if (initialX - 200 < currentX) {
                router.push(previousCaseUrl, { scroll: false })
            }
        }

    }
    return (
        <Link href={`/casos/${c.id}`} key={c.id} scroll={false}
            className={`grayscale hover:grayscale-0 ${id === c.id ? 'grayscale-0' : 'hidden xl:block'} m-2 shadow-lg rounded-lg overflow-hidden`}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouch}
        >
            <div className="relative w-[385px] max-[390px]:w-[88vw] max-[1460px]:w-[320px]">
                <p className='justify-center absolute w-full font-kanit z-10 bottom-4 text-3xl font-extrabold text-center text-white hidden sm:flex'>{c.name}</p>
                <Image
                    alt={c.name}
                    src={c.avatar}
                    placeholder="blur"
                    className='min-h-full min-w-full object-cover'
                />
            </div>
        </Link>
    )
}
export default CaseItem