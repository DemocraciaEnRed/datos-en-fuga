import Image from "next/image"
import squaresData from "./_dataReporta.js"
import squaresData2 from "./_dataProteger.js"
import { otherLogos } from "../../../public/reporta/index.js"

const Reportes = () => {
    return (
        <>
            <div className="py-6 flex flex-col flex-wrap justify-center justify-items-center items-center bg-[#f1f1f1] h-4/5 text-center">
                <Image
                    className="relative"
                    src={otherLogos.qant}
                    alt="QANT logo"
                    width={550}
                    height={356}
                    priority
                />
                <h1 className="text-3xl font-extrabold text-der-black my-5">¿ENCONTRASTE UNA FALLA DE SEGURIDAD Y TEMÉS REPORTARLA?</h1>
                <a href="#reporta" type="button" className="border-2 border-black rounded-xl p-2 my-2 bg-[#212121] text-white w-[300px] text-center">
                    ¿CÓMO REPORTAR SEGURO?
                </a>
            </div>
            <div className="text-center py-10 bg-[#212121]" id="reporta">
                <p className="text-lg text-center max-w-[1000px] mx-auto">
                    El sitio desarrollado por <span className="font-extrabold">Fundación Via Libre</span> con un sistema basado en <span className="font-extrabold">GlobalLeaks</span>, permite informar de forma anónima y protegida sobre fallas en <span className="font-extrabold">sistemas informáticos</span> que afecten los derechos de las personas. Podés reportarlas acá para que sean reparadas.
                </p>
                <div className="grid gap-2.5 grid-cols-3 grid-flow-row mx-auto justify-items-center items-center w-[830px] my-4 max-[845px]:flex flex-col max-[845px]:w-0">
                    {squaresData.map((square) => {
                        return (
                            <div
                                key={square.id}
                                className="h-[220px] w-[270px] bg-white text-der-black rounded-md text-center flex flex-col justify-center items-center"
                            >
                                <Image
                                    src={square.img}
                                    alt={square.title}
                                    width={69}
                                    height={69}
                                    priority
                                    className="mb-4"
                                />
                                <p className="font-bold">
                                    {square.title}
                                </p>
                                <p className="text-sm">
                                    {square.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <a href="https://reportes.vialibre.ngo" target="_blank" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-4 bg-[#CC4356] text-white w-[300px] text-center text-lg font-bold">
                    REPORTÁ
                </a>

                <h2 className="text-3xl text-[#F1F1F1] font-extrabold my-5">¿CÓMO TE PROTEGEMOS?</h2>

                <div className="grid gap-2.5 grid-cols-3 grid-flow-row mx-auto justify-items-center items-center w-[830px] my-4 max-[845px]:grid-cols-2 max-[775px]:flex flex-col justify-center content-center max-[775px]:w-0">
                    {squaresData2.map((square) => {
                        return (
                            <div
                                key={square.id}
                                className="h-[220px] w-[270px] bg-white text-der-black rounded-md text-center flex flex-col justify-center items-center"
                            >
                                <Image
                                    src={square.img}
                                    alt={square.title}
                                    width={69}
                                    height={69}
                                    priority
                                    className="mb-4"
                                />
                                <p className="font-bold uppercase">
                                    {square.title}
                                </p>
                                <p className="text-sm uppercase">
                                    {square.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-[85vw] text-start mx-auto text-xl my-6">
                    <ul className="list-disc">
                        <li>
                            Aunque no conservemos datos identificatorios, <span className="font-extrabold">se recomienda encarecidamente usar el</span> <span className="font-extrabold underline">navegador TOR</span> <span className="font-extrabold">y acceder al sitio a través del URL dot-onion</span> para mayor anonimato.
                        </li>
                        <li>
                            <span>
                                La información enviada a este sitio es totalmente anónima y no se registra ningún dato que pueda identificarte.
                            </span>
                        </li>
                        <li>
                            No conservamos registros de direcciones de red ni otros metadatos de conexión.
                        </li>
                        <li>
                            No cumpliremos órdenes para revelar datos identificatorios, ya que no los tenemos.
                        </li>
                        <li>
                            Publicamos informes de transparencia sobre las suicitudes u órdenes recibidas.
                        </li>
                        <li>
                            Implementamos medidas legales y un &quot;canario&quot; para proteger la privacidad en caso de recibir una orden judicial para registrar datos.
                        </li>
                        <li>
                            Se sugiere el uso de una distribución &quot;live&quot; como Tails, que implementa TOR y puede ejecutarse desde un dispositivo USB para mayor seguridad.
                        </li>
                    </ul>
                </div>
                <div className="bg-[#D9D9D9] text-der-black py-[3vw]">
                    <div className="w-[85vw] mx-auto">
                        <h2 className="py-5 text-3xl font-extrabold">¿CÓMO Y QUÉ PODES REPORTAR?</h2>
                        <p className="text-left text-xl">
                            La Fundación Via Libre se encarga de recibir reportes sobre defectos en aplicaciones empleadas por organizaciones públicas o privadas que afecten derechos de las personas. En particular, cuando se ponen en riesgo sus datos personales. Así, si encontraste una falla en una aplicación que permite que alguien no autorizado extraiga o modifique datos, tuyos o de otras personas, este es el lugar para poder informarlo. También sirve para informar sobre vulnerabilidades potenciales, por ejemplo si encontraste que un sitio está corriendo una versión obsoleta (por &quot;obsoleta&quot; entendemos una versión que ya no recibe soporte ni parches de seguridad) o insegura de software.
                        </p>

                        <div className="w-[80%] pt-2 mx-auto text-left">
                            <ol className="list-decimal text-xl">
                                <li>
                                    Es muy importante que aportes la mayor cantidad de datos posible, en especial indicando los pasos que seguiste para encontrar la falla.
                                </li>
                                <li>
                                    <span className="font-extrabold">Tomá nota del código de recepción</span>, te servirá para acceder nuevamente a tu reporte y ver qué acciones se han llevado a cabo sobre él, así como para agregar toda información adicional.
                                </li>
                                <li>
                                    Recordá que solo podemos comunicarte las novedades a través de la página de ese reporte en particular.
                                </li>
                            </ol>
                        </div>
                        <a href="https://reportes.vialibre.ngo" target="_blank" type="button" className="border-2 border-[#CC4356] rounded-xl p-2 my-4 bg-[#CC4356] text-white w-[300px] text-center text-lg font-bold">
                            HACÉ TU REPORTE ANÓNIMO
                        </a>

                        <hr className="border-black border-0.5 my-6" />

                        <h2 className="py-5 text-3xl font-extrabold">¿QUÉ HACEMOS CON TUS REPORTES?</h2>
                        <p className="text-xl text-left w-[85vw] mx-auto">
                            La Fundación Via Libre se encarga de recibir reportes anónimos sobre fallas de ciberseguridad. Trabajamos para proteger la identidad de quienes nos informan y tomamos medidas para asegurarnos de que se les dé el seguimiento adecuado. En caso de ser relevante, presentamos los informes a organismos competentes, además de explorar mecanismos de reclamo judiciales. Tu seguridad y confidencialidad son nuestra prioridad.
                        </p>
                    </div>
                </div>
                <div className="bg-[#212121] py-[3vw]">
                    <h2 className="py-5 text-3xl font-extrabold">SOBRE EL PROYECTO</h2>
                    <p className="text-xl text-left w-[85vw] mx-auto">
                        Desde Fundación Vía Libre, ODIA y Democracia en Red realizamos todos los esfuerzos técnicos para no conservar datos personales a través de los reportes recibidos. Tal como se puede consultar en la sección “¿Cómo te protegemos?”, la información que envíes es absolutamente anónima para nosotros: la plataforma está diseñada de forma tal que únicamente conserva el contenido presentado en la denuncia y genera en consecuencia un código único para identificarla, sin quedar asociada a quien la realiza. No accedemos a ni conservamos registros que permitan individualizar o identificar a quienes completan el formulario: no empleamos ningún mecanismo para trazar tu conexión ni guardamos registro de las direcciones de red desde las que te hayas conectado o cualquier otro metadato que pueda identificarte. De todas formas, recomendamos como precaución general no incluir información personal y, en lo posible, acceder a través del navegador TOR.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Reportes