import { ISbStoryData } from "@storyblok/react"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import EventsCardImage from "./EventsCardImage"
import { mapAuthors } from "./MapAuthors"

const EventsCard = ({ story }: { story: ISbStoryData }) => {
    const formattedDate = story.first_published_at ? format(new Date(story.first_published_at), "dd/MM/yyyy") : ''
    return (
        <Link href={`/blog/${story.slug}`} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="text-black h-auto max-w-full rounded-lg">
                <EventsCardImage alter={story.content.header?.name || story.content.title} sourceImg={story.content.header?.filename} />
                <div className="p-5">
                    <p className={`${story.content?.category ? "flex justify-between" : "text-right"} mb-1`}>{
                        story.content?.category &&
                        <span className="text-black bg-[#DFDFDF] rounded-3xl font-monda text-center px-3 py-1 whitespace-nowrap max-[408px]:text-sm">
                            {story.content.category}
                        </span>
                    }{formattedDate}
                    </p>

                    <p className="text-2xl font-extrabold mb-1">{story.content.title}</p>
                    <div className="mb-6">
                        <p>{story.content.brief}</p>
                        {story.content.authors ?
                            <p className="mt-1 opacity-50 italic">
                                {`Autor${story.content.authors.length > 1 ? 'es' : ''}: `}{mapAuthors(story.content.authors)}</p> :
                            null}
                    </div>
                    {/* <div className="flex flex-row flex-wrap gap-2 w-full mx-2">
                        {
                            story.tag_list.map((tag: string) => {
                                return (
                                    <span className="text-black bg-[#DFDFDF] rounded-3xl font-monda text-center px-3 py-2 whitespace-nowrap max-[408px]:text-sm" key={tag}>
                                        {tag}
                                    </span>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>
        </Link>
    )
}
export default EventsCard