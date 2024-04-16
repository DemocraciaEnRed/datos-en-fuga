import { ISbStoryData } from "@storyblok/react"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import EventsCardImage from "./EventsCardImage"

const EventsCard = ({ story }: { story: ISbStoryData }) => {
    const formattedDate = story.first_published_at ? format(new Date(story.first_published_at), "dd/MM/yyyy") : ''
    return (
        <Link href={`/novedades/${story.slug}`} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="text-black h-auto max-w-full rounded-lg">
                <EventsCardImage alter={story.content.header?.name || story.content.title} sourceImg={story.content.header?.filename} />
                <div className="p-5">
                    <p className="text-right mx-2">{formattedDate}</p>
                    <p className="text-2xl font-extrabold">{story.content.title}</p>
                    <p className="mb-6">{story.content.brief}</p>
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
}
export default EventsCard