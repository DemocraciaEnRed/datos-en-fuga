const getVideoId = (url: string) => {
    const splittedURL = url?.split('/')
    const id = splittedURL[splittedURL?.length - 1]
    return id
}

const YTVideo = ({ url, title }: { url: string, title?: string }) => {
    const videoID = url ? getVideoId(url):''
    return (
        <div className="relative overflow-hidden pb-[56.25%] h-0 my-2">
            <iframe
                src={`https://www.youtube.com/embed/${videoID}?enablejsapi=1`}
                title={title}
                width="1920"
                height="1080"
                className="absolute top-0 left-0 w-full h-full rounded-sm shadow"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
export default YTVideo