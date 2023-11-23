import { ISbStoryData } from "@storyblok/react"
import EventsCard from "./EventsCard"

const EventsMasonry = ({ stories }: { stories: ISbStoryData[] }) => {

    const rowsOnThreeCols = Math.ceil(stories.length / 3)
    const rowsOnTwoCols = Math.ceil(stories.length / 2)

    const eventsArray = (rows: number, cols: number) => {
        let evArray: ISbStoryData[][] = []
        let storiesAcc = 0
        for (let i = 0; i < cols; i++) { evArray.push([]) }

        for (let r = 0; r < rows; r++) {
            for (let i = 0; i < cols; i++) {
                if (stories[storiesAcc]) {
                    evArray[i].push(stories[storiesAcc])
                    storiesAcc++
                }
                else break
            }
        }
        return evArray
    }
    return (
        <>
            <div className="hidden lg:grid lg:grid-cols-3 gap-4 max-w-[1152px] mx-auto">
                {eventsArray(rowsOnThreeCols, 3).map((col, i) => {
                    return (
                        <div key={'col' + i} className="grid gap-4 h-min max-w-sm">
                            {col.map(story => <EventsCard key={story.id} story={story} />)}
                        </div>)
                })
                }
            </div>
            <div className="hidden lg:hidden md:grid md:grid-cols-2 gap-4 max-w-[768px] mx-auto">
                {eventsArray(rowsOnTwoCols, 2).map((col, i) => {
                    return (
                        <div key={'col' + i} className="grid gap-4 h-min max-w-sm">
                            {col.map(story => <EventsCard key={story.id} story={story} />)}
                        </div>)
                })
                }
            </div>
            <div className="md:hidden grid gap-4 max-w-sm mx-auto">
                {stories.map(story => <EventsCard key={story.id} story={story} />)}
            </div>
        </>
    )
}
export default EventsMasonry