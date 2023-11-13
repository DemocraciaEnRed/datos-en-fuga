import amparo from "../../../public/abc/amparo.png"
import VideosSLider from "../components/VideosSLider"
import Resource from "./components/Resource"
import SubtopicsMap from "./components/SubtopicsMap"

const page = () => {
    const subtopics = [
        {
            title: 'sobre la temática',
            details: [{
                q: '¿qué es la ciberseguridad?',
                a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
            },
            {
                q: '¿qué es la ciberreciliencia?',
                a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
            },
            {
                q: '¿nuestros datos están seguros?',
                a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
            }]
        },
        {
            title: 'sobre el proyecto',
            details: [{
                q: '¿qué es una vulnerabilidad informática?',
                a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
            }]
        },
    ]
    const resources = [
        {
            title: 'amparo',
            img: amparo,
            description: 'Este amparo pretende la derogación del decreto DA 410/18052, por que atenta contra la ley de datos personales hoy vigente en la constitución.',
            btnLabel: 'descargar amparo',
            url: '#'
        },
        {
            title: 'amparo',
            img: amparo,
            description: 'Este amparo pretende la derogación del decreto DA 410/18052, por que atenta contra la ley de datos personales hoy vigente en la constitución.',
            btnLabel: 'descargar amparo',
            url: '#'
        }
    ]
    const items = [{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }, { title: 'item 4' }, { title: 'item 5' }]
    const iframes = [
        {
            key: "FIMkE6u9pqs",
            src: "https://www.youtube.com/embed/FIMkE6u9pqs?enablejsapi=1",
            title: "¿Nuestros datos están seguros?"
        },
        {
            key: "7neHhi_cpsc",
            src: "https://www.youtube.com/embed/7neHhi_cpsc?enablejsapi=1",
            title: "¿Qué es la #CiberSeguridad?"
        },
        {
            key: "c5uOX2G2NGw",
            src: "https://www.youtube.com/embed/c5uOX2G2NGw?enablejsapi=1",
            title: "Vulnerabilidad informática"
        },
        {
            key: "dF2jmBf8Tko",
            src: "https://www.youtube.com/embed/dF2jmBf8Tko",
            title: "¿Qué es la #CiberResiliencia?"
        }
    ]
    return (
        <main>
            <header className="p-[6vw] md:p-[3vw] bg-der-black">
                <h1 className="font-nippo text-5xl font-bold uppercase">Lo que siempre quisiste saber del tema y no te animaste a preguntar</h1>
            </header>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black">
                <SubtopicsMap subtopics={subtopics} />
            </section>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black text-lg">
                <h2 className="font-nippo text-5xl font-bold uppercase">recursos útiles</h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${resources.length > 2 && 'lg:grid-cols-3'} gap-5 mb-5 mt-[6vw] md:mt-[3vw]`}>
                    {resources.map((resource, i) =>
                        <Resource key={'resrc' + i} resource={resource} />
                    )}
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${resources.length > 2 && 'lg:grid-cols-3'} gap-5`}>
                    {items.map((item, i) =>
                        <button key={'iList' + i} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <p className="border-l-8 border-red-600 py-2 pl-4 text-left uppercase" >{item.title}</p>
                        </button>
                    )}
                </div>
            </section>
            <section className="p-[6vw] md:p-[3vw] bg-gray-100 text-der-black text-lg">
                <h2 className="font-nippo text-4xl font-bold uppercase">videos informativos</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section>
        </main >
    )
}
export default page