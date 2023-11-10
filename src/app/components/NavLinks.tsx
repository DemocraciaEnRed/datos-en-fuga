import Link from "next/link";
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
    { href: "/ABC", label: "ABC" },
    { href: "/about", label: "ACERCA DE" }
]

const NavLinks = () => {
    return (
        <>
            {links.map((link, i) => {
                return (
                    <li key={'navlink' + i} className="mx-2 first:ml-0 last:mr-0 font-bold">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                )
            })}
        </>
    )
}
export default NavLinks