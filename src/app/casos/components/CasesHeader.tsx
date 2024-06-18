const CasesHeader = () => {
    return (
        <header className='bg-[#2D2D2D] py-[8vh] px-8 sm:px-[65px] md:px-[130px] h-4/6'>
            <h1 className='font-kanit text-2xl sm:text-4xl'>
                ¿Sabías que en Argentina hay una manera segura de reportar vulnerabilidades informáticas?
            </h1>
            <div className="flex flex-col md:flex-row gap-4 sm:text-lg my-3">
                <a href="#reporta" type="button" className="flex items-center justify-center border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#CC4356] text-white w-[240px] sm:w-[300px] text-center font-extrabold">
                    <p>¿QUÉ Y CÓMO REPORTAR?</p>
                </a>
                <a href="#casos" type="button" className="flex items-center justify-center border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#2D2D2D] text-[#CC4356] w-[240px] sm:w-[300px] text-center font-extrabold">
                    <p>CASOS</p>
                </a>
            </div>
        </header>
    )
}
export default CasesHeader