import Iframe from "@/app/components/Iframe"
import { iframes } from "../_data"

const SubtopicVideo = ({ videoKey }: { videoKey: string }) => {
    const v = iframes.find((v) => v.key === videoKey)
    if (v) {
        return (
            <div className="rounded-md overflow-hidden mb-4">
                <Iframe title={v.title} source={v.src} />
            </div>
        )
    } else null
}
export default SubtopicVideo