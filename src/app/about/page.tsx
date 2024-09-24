import { Metadata } from "next"
import VideosSLider from "../components/VideosSLider"
import ActionsList from "./components/ActionsList"
import Quienes from "./components/Quienes"

const metaTitle = '¿Qué queremos? | Datos en Fuga'
const metaDescription = 'Queremos que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados. Queremos que el Estado deje de perseguir penalmente a quienes identifican, denuncian y reportan vulnerabilidades informáticas.'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription
  }
}

const About = () => {
    const iframes = [
        {
            key: "xhNJZSZZvIY",
            src: "https://www.youtube.com/embed/xhNJZSZZvIY?enablejsapi=1",
            title: "¿Nuestros datos están seguros? | Datos en Fuga"
        },
        {
            key: "gkeBqwBE0wA",
            src: "https://www.youtube.com/embed/gkeBqwBE0wA?enablejsapi=1",
            title: "El Estado debe invertir en ciberseguridad y dejar de perseguir a reportantes | Datos en Fuga"
        }]
    return (
        <main className="bg-gray-100 text-der-black font-mada">
            <header className="p-[6vw] md:p-[3vw] bg-[#212121] text-[#F1F1F1]">
                <div className="mx-[5%] font-kanit ">
                    <h1 className="text-4xl font-bold">¿Qué queremos?</h1>
                    <p className="my-7 text-3xl">Queremos que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados.</p>
                    <p className="my-7 text-3xl">Queremos que el Estado deje de perseguir penalmente a quienes identifican, denuncian y reportan vulnerabilidades informáticas.</p>
                </div>
                
            </header>
            <section className="p-[6vw] md:p-[3vw] mx-[5%]">
                <h2 className="font-kanit text-4xl font-bold">¿Por qué datos en fuga?</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section>
            {/* <section className="p-[6vw] md:p-[3vw] bg-der-black text-white">
                <ActionsList />
            </section> */}
            <section className="p-[6vw] md:p-[3vw] bg-[#212121]">
                <div className="mx-[5%] text-[#F1F1F1]">
                    <h2 className="font-kanit text-4xl font-bold mb-7">¿Por qué nos interesa?</h2>
                    <p className="mb-7 text-xl w-[85vw]">Porque las filtraciones que sufrieron diversas reparticiones del Estado en el último tiempo nos hacen temer que sus sistemas son vulnerables. Porque nos sentimos cada vez más expuestos al mal uso de nuestros datos para distintos fines, ninguno bueno. Porque se persigue penalmente a activistas de la comunidad de seguridad informática, que podrían ayudar. Porque se legitima una “cultura del miedo” que silencia el debate en materia de seguridad informática.
                    </p>
                </div>
            </section>
            <section className="p-[6vw] md:p-[3vw] mx-[5%]">
                <h2 className="font-kanit text-4xl font-bold mb-7">¿Quiénes somos?</h2>
                {/* <p className="mb-7 text-xl w-[70vw]">Somos varias organizaciones de la sociedad civil que buscan que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados. 
                </p> */}
                <div>
                    <Quienes />
                </div>
            </section>
        </main>
    )
}
export default About