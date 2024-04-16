import Image from "next/image"

const LandingFlourish = () => {
    return (
        <div className="w-[60%] max-lg:w-full bg-der-black">
            <iframe src='https://flo.uri.sh/story/1969359/embed'
                title='Interactive or visual content'
                className='flourish-embed-iframe w-full h-[600px]'
                sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            />
            <div className="w-full mt-1 text-right">
                <a className='flourish-credit no-underline' href='https://public.flourish.studio/story/1969359/?utm_source=embed&utm_campaign=story/1969359'
                    target='_top'
                />
                <Image alt="Flourish logo" src="https://public.flourish.studio/resources/bosh.svg" width={105} height={16} className="w-auto h-3 border-none mx-1 my-0 align-middle inline-block shadow-none" />
                <span className='text-gray-500 align-middle inline-block shadow-none text-xs font-bold'>A Flourish data visualization</span>
            </div>
        </div>
    )
}
export default LandingFlourish