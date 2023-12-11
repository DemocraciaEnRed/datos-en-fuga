import VideosSLider from "../components/VideosSLider"
import ActionsList from "./components/ActionsList"
import Quienes from "./components/Quienes"

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
        <main className="bg-gray-100 text-der-black font-open-sans">
            <header className="p-[6vw] md:p-[3vw] border-b-2 border-b-der-black">
                <h1 className="font-nippo text-4xl font-bold uppercase">¿qué queremos?</h1>
                <p className="my-7 md:w-[65vw] lg:w-[55vw] text-xl">Queremos que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados.</p>
                <p className="my-7 md:w-[65vw] lg:w-[55vw] text-xl">Queremos que el Estado deje de perseguir penalmente a quienes identifican, denuncian y reportan vulnerabilidades informáticas.</p>
            </header>
            <section className="p-[6vw] md:p-[3vw] border-b-2 border-b-der-black">
                <h2 className="font-nippo text-4xl font-bold uppercase">¿por qué datos en fuga?</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section>
            {/* <section className="p-[6vw] md:p-[3vw] bg-der-black text-white">
                <ActionsList />
            </section> */}
            <section className="p-[6vw] md:p-[3vw] ">
                <h2 className="font-nippo text-4xl font-bold uppercase mb-7">¿quiénes somos?</h2>
                <p className="mb-7 text-xl w-[70vw]">Somos varias organizaciones de la sociedad civil que buscan que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados. 
                </p>
                <div>
                    <Quienes />
                </div>
            </section>
        </main>
    )
}
export default About