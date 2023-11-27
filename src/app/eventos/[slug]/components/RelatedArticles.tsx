import { ISbStoriesParams, ISbStoryData, getStoryblokApi } from "@storyblok/react"
import EventsCard from "../../components/EventsCard"

const RelatedArticles = async ({ uid, tags }: { uid: string, tags: string[] }) => {
    const { data } = await fetchData(uid, tags)
    const articles = []

    if (data.stories.length >= 1) { articles.push(...getRelatedArticles(data.stories)) }

    if (articles.length > 0) {
        return (
            <>
                <h2 className="text-center text-xl mb-5">Artículos relacionados</h2>
                <div className="flex gap-4 [&_a]:max-w-[374px] justify-center flex-wrap">
                    {articles.map((story) => <EventsCard key={story.id} story={story} />)}
                </div>
            </>
        )
    } else {
        return null
    }
}
export default RelatedArticles

const getRelatedArticles = (stories: any) => {
    let cardsCount = 3
    if (stories?.length < cardsCount) { cardsCount = stories.length }

    const result = [];
    const indexes = Array.from({ length: stories.length }, (_, index) => index);

    for (let i = 0; i < cardsCount; i++) {
        const randomIndex = Math.floor(Math.random() * indexes.length);
        const selectedIndex = indexes.splice(randomIndex, 1)[0];
        result.push(stories[selectedIndex]);
    }
    return result;
}

const fetchData = async (uid: string, tags: string[]) => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "news/",
        excluding_fields: 'body,_editable,component',
        with_tag: tags.join(),
        filter_query: {
            //ESTE FILTRO HACE QUE LOS CLONES DE LAS STORIES NO SE TRAIGAN OJO (LOS CLONES SE CREAN CON EL MISMO _UID)
            _uid: {
                not_in: `${uid}`
            }
        }   
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}