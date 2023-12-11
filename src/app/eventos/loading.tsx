import SuspenseMasonry from "./components/SuspenseMasonry"

const EventosLoading = () => {
    return (
        <main className="bg-[#F1F1F1]">
            <header className='bg-[#2D2D2D] px-[7vw] py-[4vw]'>
                <h1 className='font-nippo text-4xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-3xl'>
                    EVENTOS
                </h1>
                <p className='font-nippo text-5xl font-bold max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-4xl'>
                    QUE ACCIONES HEMOS LLEVADO A CABO EN EL PROYECTO
                </p>
            </header>
            <section className="p-[4vw]">
                <SuspenseMasonry />
            </section>
        </main>
    )
}
export default EventosLoading