import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import EventsMasonry from "./components/EventsMasonry";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Eventos',
    description: 'Eventos',
    keywords: 'debate, presentaciones, seguridad informática, ciberseguridad, justicia'
}

const Eventos = async () => {
    const { data } = await fetchData();
    return (
        <main className="bg-[#F1F1F1] flex flex-col flex-grow">
            <header className='bg-[#2D2D2D] px-[7vw] py-[4vw]'>
                <h1 className='font-nippo text-4xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-3xl'>
                    EVENTOS
                </h1>
                <p className='font-nippo text-5xl font-bold max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-4xl'>
                    QUE ACCIONES HEMOS LLEVADO A CABO EN EL PROYECTO
                </p>
            </header>
            <section className="p-[4vw] flex-grow">
                <EventsMasonry stories={data.stories} />
            </section>
        </main>
    )
}
export default Eventos

const fetchData = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "events/",
        excluding_fields: 'body,_editable,_uid',
        sort_by: "created_at:desc"
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}