'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
type Navlink = {
    href: string,
    label: string
}

const links: Navlink[] = [
    { href: "/", label: "INICIO" },
    { href: "/amparo", label: "AMPARO" },
    { href: "/casos", label: "CASOS" },
    { href: "/reporta", label: "REPORTÁ" },
    { href: "/eventos", label: "EVENTOS" },
    { href: "/abc", label: "ABC" },
    { href: "/about", label: "ACERCA DE" }
]
const firstSegment = (path: string) => `/${path.split('/')[1]}`


const NavLinks = () => {
    const pathname = usePathname()

    return (
        <>
            {links.map((link, i) => {
                return (
                    <li key={'navlink' + i}>
                        <Link href={link.href} className={firstSegment(pathname) === link.href ? 'font-semibold' : ''}>{link.label}</Link>
                    </li>
                )
            })}
        </>
    )
}
export default NavLinks