import { ISbStoriesParams, ISbStoryData, StoryblokComponentType, getStoryblokApi } from "@storyblok/react";
import EventsCard from "../eventos/components/EventsCard";
import Link from "next/link";

const fetchLatestArticles = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "events/",
        excluding_fields: 'body,_editable,_uid',
        sort_by: "created_at:desc",
        page: 1,
        per_page: 3
    };

    const article = await storyblokApi.get(`cdn/stories`, sbParams);

    return article
}

const LandingArticles = async () => {
    const articles = (await fetchLatestArticles()).data.stories
    return (
        <>
            {articles.length > 0 && (
                <>
                    <h2 className="text-center text-4xl text-der-black mb-5 uppercase font-bold">Novedades</h2>
                    <div className="flex gap-4 [&_a]:max-w-[374px] justify-center flex-wrap">
                        {articles.length > 0 ?
                            articles.map((story: ISbStoryData) => <EventsCard key={story.id} story={story} />) :
                            <p>No hay nuevos artículos</p>
                        }
                    </div>
                    <Link href="/eventos" type="button" className="block border-full border-[#CC4356] rounded-full py-4 px-16 bg-[#CC4356] text-white w-fit text-center uppercase text-lg mx-auto mt-[4vw]">
                        <span className="uppercase">conocé todas las novedades</span>
                    </Link>
                </>)
            }
        </>
    )
}
export default LandingArticles