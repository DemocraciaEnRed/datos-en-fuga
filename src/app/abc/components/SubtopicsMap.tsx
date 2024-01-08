import Subtopic from "./Subtopic"

export interface SubtopicIF {
    title: string,
    details: Detail[]
}

export interface Detail {
    q: string,
    a: string[],
    videoKey?: string
}

const SubtopicsMap = ({ subtopics }: { subtopics: SubtopicIF[] }) => {
    return (
        <div className="w-[74vw] md:w-[57vw] mx-auto">
            {subtopics.map((subtopic, i) => <Subtopic key={'subtopic' + i} subtopic={subtopic} />)}
        </div>
    )
}
export default SubtopicsMap