import { ISbStoriesParams, ISbStoryData, StoryblokComponentType, getStoryblokApi } from "@storyblok/react";
import EventsCard from "../blog/components/EventsCard";
import Link from "next/link";

const fetchLatestArticles = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'published',
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
                    <h2 className="text-center text-4xl text-der-black mb-5 uppercase font-bold">Blog</h2>
                    <div className="flex gap-4 [&_a]:max-w-[374px] justify-center flex-wrap">
                        {articles.map((story: ISbStoryData) => <EventsCard key={story.id} story={story} />)}
                    </div>
                    <Link href="/blog" type="button" className="block border-full border-[#CC4356] rounded-full py-3 px-10 md:py-4 md:px-16 bg-[#CC4356] text-white w-fit text-center uppercase text-lg mx-auto mt-[4vw]">
                        <span className="uppercase">Más novedades</span>
                    </Link>
                </>)
            }
        </>
    )
}
export default LandingArticles