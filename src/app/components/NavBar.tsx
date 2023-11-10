import NavLinks from "./NavLinks"

const NavBar = () => {
    return (
        <nav className="bg-slate-950 p-4">
            <ul className="flex justify-center flex-wrap">
                <NavLinks />
            </ul>
        </nav>
    )
}
export default NavBar