'use client'

import { useState } from "react"
import NavLinks from "./NavLinks"
import { sharedImages } from "~/shared"
import Image from "next/image"
import Link from "next/link"

const CollapseNavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    let burgerMenuClass = 'hidden'
    const navElemsSize = "w-8 h-8"

    if (!showMenu) burgerMenuClass = 'hidden opacity-0'
    else burgerMenuClass = 'flex flex-col items-center content-center z-20 fixed top-0 left-0 bg-black w-full h-full opacity-100'

    return (
        <>
            <nav className="flex justify-between sm:hidden bg-black p-4">
                <Link href={"/"} className={navElemsSize}>
                    <Image src={sharedImages.navIcon} alt="Inicio" />
                </Link>
                <button onClick={() => setShowMenu(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={navElemsSize}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
            <div className={burgerMenuClass + ' transition-opacity delay-0 duration-500'} onClick={(event) => {
                event.stopPropagation()
                setShowMenu(false)
            }}>
                <button className="self-end p-4" onClick={() => setShowMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <ul className="font-monda m-auto uppercase text-4xl [&_li]:mb-[3vh]">
                    <NavLinks />
                </ul>
            </div>
        </>
    )
}
export default CollapseNavBar