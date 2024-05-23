import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react"
import EventsCard from "../../components/EventsCard"

const RelatedArticles = async ({ uid, tags }: { uid: string, tags: string[] }) => {
    const { data } = await fetchData(uid, tags)
    const articles = []

    if (data.stories.length > 0) { articles.push(...getRelatedArticles(data.stories)) }

    return (
        <>
            <h2 className="text-center text-xl mb-5">Artículos relacionados</h2>
            <div className="flex gap-4 [&_a]:max-w-[374px] justify-center flex-wrap">
                {articles.length > 0 ?
                    articles.map((story) => <EventsCard key={story.id} story={story} />) :
                    <p>No hay artículos relacionados</p>
                }
            </div>
        </>
    )
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
    try {
        const storyblokApi = getStoryblokApi()

        let sbParams: ISbStoriesParams = {
            version: 'published',
            starts_with: "events/",
            excluding_fields: 'body,_editable,component',
            with_tag: tags.join(),
            filter_query: {
                _uid: {
                    not_in: `${uid}`
                }
            }
        };
        return await storyblokApi.get(`cdn/stories`, sbParams);

    } catch (error) {
        console.error(error);
        return { data: { stories: [] } }
    }
}