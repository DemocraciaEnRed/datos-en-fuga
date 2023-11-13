import NavLinks from "./NavLinks"

const NavBar = () => {
    return (
        <nav className="bg-black p-4">
            <ul className="flex justify-center flex-wrap">
                <NavLinks />
            </ul>
        </nav>
    )
}
export default NavBar