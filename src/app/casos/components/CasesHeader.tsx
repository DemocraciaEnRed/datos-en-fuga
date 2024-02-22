const CasesHeader = () => {
    return (
        <header className='bg-[#2D2D2D] py-[8vh] px-10 h-4/6'>
            <h1 className='font-nippo max-w-[800px] text-3xl md:text-5xl'>
                ¿SABÍAS QUE EN ARGENTINA <br /> <span className="font-bold">HAY UNA MANERA SEGURA DE REPORTAR VULNERABILIDADES INFORMÁTICAS?</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-4 text-lg my-3">
                <a href="#reporta" type="button" className="flex items-center justify-center border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#CC4356] text-white w-[300px] text-center font-extrabold">
                    <p>¿QUÉ Y CÓMO REPORTAR?</p>
                </a>
                <a href="#casos" type="button" className="flex items-center justify-center border-2 border-[#CC4356] rounded-xl p-2 my-2 bg-[#2D2D2D] text-[#CC4356] w-[300px] text-center font-extrabold">
                    <p>CASOS</p>
                </a>
            </div>
        </header>
    )
}
export default CasesHeader