import CollapseNavBar from "./CollapseNavBar"
import NavLinks from "./NavLinks"

const NavBar = () => {
    return (
        <>
            <nav className="hidden sm:block bg-black p-4">
                <ul className="flex justify-center flex-wrap gap-5 uppercase font-monda">
                    <NavLinks />
                </ul>
            </nav>
            <CollapseNavBar/>
        </>
    )
}
export default NavBar