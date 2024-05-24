const ActionsList = () => {
    return (
        <>
            <h2 className="mb-7 font-kanit text-4xl font-bold uppercase ">¿que hicimos?</h2>
            <p className="mb-7 w-[70vw]">Estas son algunas de las acciones que hemos llevado a acabo en el proyecto, en nuestro objetivo de aumentar al conciencia sobre la importancia de la ciberseguridad, la inversión del estado en este campo y la concienciación de la ciudadanía.</p>
            <ol className="text-xl list-decimal [&_li]:mb-4 ml-[10vw] md:ml-[7vw] w-[60vw]">
                <li>
                    <h3><strong className="font-bold">Webinar periodistas</strong> - Septiembre 2023:</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <a href="#" className="uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Inscribite</a>
                    </div>
                </li>
                <li>
                    <h3><strong className="font-bold">Jornadas nformativas: Justicia 4.0</strong> - Noviembre 2022:</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Videos del encuentro</p>
                    <div>
                        <a href="#" className="first:mr-2 uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Videos del encuentro</a>
                        <a href="#" className="uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Recursos</a>
                    </div>
                </li>
                <li>
                    <h3><strong className="font-bold">1er Encuentro Regional de ciberseguidad</strong> - Octubre 2022:</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <a href="#" className="first:mr-2 uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Videos del encuentro</a>
                        <a href="#" className="uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Recursos</a>
                    </div>
                </li>
                <li>
                    <h3><strong className="font-bold">Muestra de arte</strong> - Agosto 2022:</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <a href="#" className="uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Conoce las Obras</a>
                    </div>
                </li>
                <li>
                    <h3><strong className="font-bold">Jornada via publica Fiscalia</strong> - Mayo 2022:</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <a href="#" className="uppercase text-[#CC4356] underline underline-offset-4" target="_blank" rel="noopener noreferrer">Descarga el paper</a>
                    </div>
                </li>
            </ol>
        </>
    )
}
export default ActionsList