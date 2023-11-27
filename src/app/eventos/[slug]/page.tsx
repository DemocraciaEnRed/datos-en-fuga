import { ISbStoriesParams, ISbStory, ISbStoryParams, getStoryblokApi } from "@storyblok/react/rsc";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Content from "./components/Content";
import RelatedArticles from "./components/RelatedArticles";

export async function generateStaticParams() {
    const news = await fetchData()
    return news.data.stories.map((article: any) => {
        return { slug: article.slug }
    })
}

const EventosBySlug = async ({ params }: { params: { slug: string } }) => {
    const { data } = await fetchArticleBySlug(params.slug)
    const { name, content, first_published_at, tag_list } = data.story
    const bgColors = [
        '#006482',
        '#CC4356',
        '#212121',
    ]

    const headerStyles = {
        background: content.header.filename? `url(${content.header.filename})` : bgColors[Math.floor(Math.random() * 3)],
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <main className="flex-grow bg-[#F1F1F1] text-[#212121] text-base font-lexend-deca">
            <header className="h-[25vh]" style={headerStyles}>
                <p className="bg-gray-700 bg-opacity-80 px-7 py-3 text-white">Eventos &gt; {name}</p>
            </header>
            <section className="md:w-[58vw] mx-auto py-[4vw]">
                <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
                <p className="mb-4 text-xl">Por <span className="uppercase">{content.authors ? mapAuthors(content.authors) : 'Anónimo'}</span></p>
                <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap gap-4 md:gap-9">
                    <article className="flex-grow w-full md:w-auto">
                        <Content document={content.body} />
                    </article>
                    <aside className="flex flex-col gap-6 text-right md:-translate-y-10 w-full md:w-auto">
                        <div>
                            <p className="font-bold">Autor</p>
                            {content.authors ?
                                (content.authors.map((author: { name: string }) => {
                                    return <p className="text-sm" key={author.name}>{author.name}</p>
                                }))
                                :
                                <p className="text-sm">Anónimo</p>
                            }
                        </div>
                        <div>
                            <p className="font-bold">Publicado</p>
                            <p className="text-sm">{first_published_at ? formatDate(first_published_at) : 'Sin publicar'}</p>
                        </div>
                        <div className="self-end">
                            <p className="font-bold">Etiquetas</p>
                            <div className="flex flex-col items-end gap-2 md:w-[10vw]">
                                {tag_list.length > 0 ? tag_list.map((tag) => {
                                    return (
                                        <span className="md:max-w-[10vw] text-white bg-[#008BB4] text-[10px] rounded-3xl font-roboto font-bold text-center py-1 px-3 capitalize truncate hover:whitespace-normal" key={tag}>
                                            {tag}
                                        </span>
                                    )
                                }) :
                                    <span className="md:max-w-[10vw]max-w-[10vw] text-sm">No hay etiquetas vinculadas</span>}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            {tag_list.length > 0 &&
                <section className="py-[4vw]">
                    <RelatedArticles tags={tag_list} uid={content._uid!} />
                </section>}
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
    authors.forEach((author: { name: string }, i: number) => {
        if (authors.length > 1 && i + 1 < authors.length) authorsString = `${authorsString}${author.name}, `
        else if (authors.length > 1) authorsString = `${authorsString}y ${author.name}`
        else authorsString = `${authorsString}${author.name}`
    })
    return authorsString
}

const formatDate = (date: string) => format(new Date(date), "dd/MM/yyyy") 