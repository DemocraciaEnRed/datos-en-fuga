import Iframe from "@/app/components/Iframe"

const getVideoId = (url: string) => {
    const splittedURL = url?.split('/')
    const id = splittedURL[splittedURL?.length - 1]
    return id
}

const YTVideo = ({ url, title }: { url: string, title?: string }) => {
    const videoID = url ? getVideoId(url) : ''
    const source = `https://www.youtube.com/embed/${videoID}?enablejsapi=1`
    const iframeTitle = title || ''
    return (
        <div className="my-2">
            <Iframe source={source} title={iframeTitle} />
        </div>
    )
}
export default YTVideo