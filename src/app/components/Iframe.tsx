const Iframe = ({ source, title }: { source: string, title: string }) => {
    return (
        <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
                src={source}
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
export default Iframe