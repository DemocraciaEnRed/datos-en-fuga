import Link from "next/link"
import Image from "next/image";
import { ISbStoriesParams, ISbStoryData, getStoryblokApi } from "@storyblok/react/rsc";
import { format } from "date-fns";


const Eventos = async () => {
    const { data } = await fetchData();
    console.log(data.stories[0])

    return (
        <section className="bg-[#F1F1F1]">
            <div className='bg-[#2D2D2D] py-[8vh] px-10 h-4/6'>
                <h1 className='font-nippo text-5xl w-[800px] max-[810px]:w-[500px] max-[500px]:w-[250px] max-[500px]:text-3xl max-[375px]:text-2xl'>
                    EVENTOS
                </h1>
                <p className='font-nippo text-5xl font-extrabold max-[810px]:w-[500px] max-[500px]:w-[250px] sm:text-4xl'>
                    QUE ACCIONES HEMOS LLEVADO A CABO EN EL PROYECTO
                </p>
            </div>
            <div className="py-[8vh] grid grid-cols-3 items-center justify-center justify-items-center max-[1243px]:grid-cols-2 gap-y-5 max-[850px]:grid-cols-1">
                {
                    data.stories.map((story: ISbStoryData) => {

                        const formattedDate = format(new Date(story.created_at), "dd/MM/yyyy")

                        return (

                        <Link
                            href={`/eventos/${story.slug}`}
                            key={story.id}
                            className="w-[400px] max-[408px]:w-[250px]"
                        >
                        <div className="w-[400px] h-[550px] bg-white text-black rounded-[10px] max-[408px]:w-[250px]" >
                            <div className="w-full h-[202px] rounded-t-lg overflow-hidden">
                                <Image
                                    alt={story.content.header?.name}
                                    src={story.content.header?.filename}
                                    width={400}
                                    height={202}
                                    className="w-[400px] max-w-none min-h-full"
                                />
                            </div>
                            <div className="py-5 px-3">
                                <p className="text-right mx-2">{formattedDate}</p>
                                <p className="text-2xl font-extrabold">
                                    {story.content.title}
                                </p>
                                <p className="mb-6 truncate hover:text-clip hover:whitespace-normal">
                                    {story.content.brief}
                                </p>
                                <div className="flex flex-row flex-wrap gap-2 w-full mx-2">
                                    {
                                        story.tag_list.map((tag: string) => {
                                            return (
                                                <span className="text-black bg-[#DFDFDF] rounded-3xl font-roboto text-center px-3 py-2 whitespace-nowrap max-[408px]:text-sm" key={tag}>
                                                    {tag}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Eventos

const fetchData = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "news/",
        excluding_fields: 'body,_editable,_uid',
        sort_by: "created_at:asc"
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}