import { ISbStoryData } from "@storyblok/react"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"

const EventsCard = ({ story }: { story: ISbStoryData }) => {
    const formattedDate = format(new Date(story.created_at), "dd/MM/yyyy")
    return (
        <Link href={`/novedades/${story.slug}`} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="text-black h-auto max-w-full rounded-lg">
                <Image alt={story.content.header?.name} src={story.content.header?.filename}
                    width={400} height={202} className="min-h-[150px] max-h-52 object-cover rounded-t-lg"
                    placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPUrQcAAN8ArguAKQcAAAAASUVORK5CYII=" />
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