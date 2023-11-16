import { ISbStoriesParams, getStoryblokApi, ISbStory, ISbStoryData } from "@storyblok/react/rsc";
import { MARK_BOLD, NODE_HEADING, NODE_PARAGRAPH, render } from 'storyblok-rich-text-react-renderer';
import { notFound } from "next/navigation";
import { ReactNode, createElement } from "react";
import Content from "./components/Content";

const fetchArticleBySlug = async (slug: string): Promise<ISbStory> => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = { version: 'draft' };
    const article = await storyblokApi.get(`cdn/stories/news/${slug}`, sbParams);

    if (!article) notFound()

    return article
}

const fetchData = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "news/"
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}

export async function generateStaticParams() {
    const news = await fetchData()
    return news.data.stories.map((article: any) => {
        return { slug: article.slug }
    })
}

const EventosBySlug = async ({ params }: { params: { slug: string } }) => {
    const { data } = await fetchArticleBySlug(params.slug)

    return (
        <section className="bg-gray-100 text-black p-[3vw] md:p-[6vw] text-base">
            <Content document={data.story.content.body}/>
        </section>
    )
}
export default EventosBySlug

