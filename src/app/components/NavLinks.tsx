'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
type Navlink = {
    href: string,
    label: string
}

const links: Navlink[] = [
    { href: "/", label: "inicio" },
    { href: "/amparo", label: "amparo" },
    { href: "/casos", label: "casos" },
    { href: "/reporta", label: "reportá" },
    { href: "/novedades", label: "novedades" },
    { href: "/about", label: "acerca de" },
    { href: "/abc", label: "ABC" }
]
const firstSegment = (path: string) => `/${path.split('/')[1]}`


const NavLinks = () => {
    const pathname = usePathname()

    return (
        <>
            {links.map((link, i) => {
                return (
                    <li key={'navlink' + i}>
                        <Link href={link.href} className={firstSegment(pathname) === link.href ? 'font-bold' : ''}>{link.label}</Link>
                    </li>
                )
            })}
        </>
    )
}
export default NavLinks