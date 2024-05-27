import SubtopicVideo from "./SubtopicVideo"
import { SubtopicIF } from "./SubtopicsMap"

const Subtopic = ({ subtopic }: { subtopic: SubtopicIF }) => {
    return (
        <>
            {/* <h3 className="font-kanit text-2xl font-bold uppercase">{subtopic?.title}</h3> */}
            <div className="mx-auto">
                {subtopic?.details.map((detail, i) => {
                    return (
                        <details key={'details' + i} className="group my-5">
                            <summary className="flex cursor-pointer bg-black rounded-lg p-2 uppercase shadow-md text-white">
                                {detail.q}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="transition-all ml-auto w-6 h-6 group-open:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </summary>
                            <div className="p-4 mx-2 bg-white shadow-md last:rounded-b-lg tracking-wide">
                                {detail.videoKey && <SubtopicVideo videoKey={detail.videoKey} />}
                                {detail.a.map((answer, i2) => {
                                    return (
                                        <p key={`'a${i}${i2}`}>
                                            {answer}
                                        </p>
                                    )
                                })}
                            </div>
                        </details>
                    )
                })}
            </div>
        </>
    )
}
export default Subtopic