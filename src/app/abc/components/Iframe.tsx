import { iframes } from "../_data"

const Iframe = ({ videoKey }: { videoKey: string }) => {
    const v = iframes.find((v) => v.key === videoKey)
    return (
        <div className="relative overflow-hidden pb-[56.25%] h-0 my-2">
            <iframe
                src={v?.src}
                title={v?.title}
                width="1920"
                height="1080"
                className="absolute top-0 left-0 w-full h-full rounded-sm shadow"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
export default Iframe