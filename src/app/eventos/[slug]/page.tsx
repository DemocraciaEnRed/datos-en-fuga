import { ISbStoriesParams, getStoryblokApi, ISbStory, ISbStoryParams } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import Content from "./components/Content";

export async function generateStaticParams() {
    const news = await fetchData()
    return news.data.stories.map((article: any) => {
        return { slug: article.slug }
    })
}

const EventosBySlug = async ({ params }: { params: { slug: string } }) => {
    const { data } = await fetchArticleBySlug(params.slug)

    return (
        <main className="bg-[#F1F1F1] text-[#212121] p-[3vw] md:p-[6vw] text-base flex flex-col-reverse justify-around md:flex-row">
            <article>
                <h1 className="text-3xl font-extrabold my-4">{data.story.name}</h1>
                <p className="my-4 text-xl">Por <span className="uppercase">{mapAuthors(data.story.content.authors)}</span></p>
                <Content document={data.story.content.body} />
            </article>
            <aside className="flex flex-col gap-5 text-center md:text-right">
                <div>
                    <p className="font-bold">Autor</p>
                    {data.story.content.authors ?
                        (data.story.content.authors.map((author: { name: string }) => {
                            return <p className="text-sm" key={author.name}>{author.name}</p>
                        }))
                        :
                        <p className="text-sm">Anónimo</p>
                    }
                </div>

                <div>
                    <p className="font-bold">Publicado</p>
                    <p className="text-sm">23/11/2023</p>
                </div>

                <div className="flex flex-col gap-2">
                    {
                        data.story.tag_list.map((tag) => {
                            return (
                                <span className="text-white bg-[#008BB4] text-sm rounded-3xl font-roboto text-center py-2 whitespace-nowrap" key={tag}>
                                    {tag}
                                </span>
                            )
                        })
                    }
                </div>
            </aside>
        </main>
    )
}
export default EventosBySlug

const fetchArticleBySlug = async (slug: string): Promise<ISbStory> => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoryParams = { version: 'draft' };
    const article = await storyblokApi.get(`cdn/stories/news/${slug}`, sbParams);

    if (!article) notFound()
    return article
}

const fetchData = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "news/",
        excluding_fields: 'title,brief,body,header,_editable,_uid,component'
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}
const mapAuthors = (authors: any) => {
    let authorsString = ''
    if (authors) {
        authors.forEach((author: { name: string }, i: number) => {
            if (authors.length > 1 && i + 1 < authors.length) authorsString = `${authorsString}${author.name}, `
            else if (authors.length > 1) authorsString = `${authorsString}y ${author.name}`
            else authorsString = `${authorsString}${author.name}`
        })
    } else {
        authorsString = 'Anónimo'
    }
    return authorsString
}