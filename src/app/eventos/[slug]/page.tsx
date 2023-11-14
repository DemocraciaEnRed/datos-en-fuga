import { ISbStoriesParams, getStoryblokApi, ISbStory, ISbStoryData, renderRichText } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
import { notFound } from "next/navigation";

const fetchArticleBySlug = async (slug: string): Promise<ISbStory> => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = { version: 'draft' };
    const article = await storyblokApi.get(`cdn/stories/news/${slug}`, sbParams);

    if (!article) notFound()

    return article
}
const richText = (document: ISbStoryData<Body>) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <>{render(document)}</>;
}

const EventosBySlug = async ({ params }: { params: { slug: string } }) => {
    const { data } = await fetchArticleBySlug(params.slug)
    console.log('-----------------------------------------------');
    console.log(data.story.content.body);

    // const renderedRichText = renderRichText(data.story.content.body);
    // return <div dangerouslySetInnerHTML={{ __html: html }} />;
    // console.log(renderedRichText);

    return (
        <section className="text-white p-[3vw] md:p-[6vw]">
            {richText(data.story.content.body)}
            {/* <div dangerouslySetInnerHTML={{ __html: renderedRichText }}></div> */}
        </section>
    )
}
export default EventosBySlug

