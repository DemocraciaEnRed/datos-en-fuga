import { subtopics, resources, iframes, items } from './_data'
import VideosSLider from "../components/VideosSLider"
import Resource from "./components/Resource"
import SubtopicsMap from "./components/SubtopicsMap"

const page = () => {
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
                <h2 className="font-nippo text-5xl font-bold uppercase">videos informativos</h2>
                <div className="py-[6vw] md:py-[3vw]">
                    <VideosSLider iframes={iframes} />
                </div>
            </section>
        </main >
    )
}
export default page