import NavLinks from "./NavLinks"

const NavBar = () => {
    return (
        <nav className="bg-black p-4">
            <ul className="flex justify-center flex-wrap gap-5 uppercase font-inter">
                <NavLinks />
            </ul>
        </nav>
    )
}
export default NavBar