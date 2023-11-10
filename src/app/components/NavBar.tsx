import NavLinks from "./NavLinks"

const NavBar = () => {
    return (
        <nav className="bg-slate-950 py-4">
            <ul className="flex justify-center">
                <NavLinks />
            </ul>
        </nav>
    )
}
export default NavBar