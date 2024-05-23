'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import canilla from "../../../public/gifCanilla.gif"

type Navlink = {
    href: string,
    label: string
}

const links: Navlink[] = [
    { href: "/", label: "inicio" },
    { href: "/amparo", label: "amparo" },
    { href: "/casos", label: "casos" },
    { href: "/reporta", label: "reportá" },
    { href: "/blog", label: "blog" },
    { href: "/about", label: "acerca de" },
    { href: "/abc", label: "ABC" }
]
const firstSegment = (path: string) => `/${path.split('/')[1]}`


const NavLinks = () => {
    const pathname = usePathname()

    return (
        <>
            <Link href="/">
                <Image src={canilla} alt="Datos en Fuga logo" height={40} width={40} />
            </Link>
            {links.map((link, i) => {
                return (
                    <li key={'navlink' + i} className="flex items-center ml-4">
                        <Link href={link.href} className={firstSegment(pathname) === link.href ? 'font-bold mx-4' : 'mx-4'}>{link.label}</Link>
                    </li>
                )
            })}
        </>
    )
}
export default NavLinks