"use client"
import { useEffect, useState } from "react"
import ChevronSVG from "./ChevronSVG";
import Image from "next/image";
import Spinner from "./Spinner";

export interface IFrame {
    key: string,
    src: string,
    title?: string
}

const VideosSLider = ({ iframes }: { iframes: IFrame[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [fadeIn, setFadeIn] = useState(false);
    const previousSlide = () => {
        const isFirstSlide = currentSlide == 0;
        const newSlide = isFirstSlide ? iframes.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide)
    };
    const nextSlide = () => {
        const isLastSlide = currentSlide == iframes.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)
    };

    useEffect(() => { setFadeIn(false) }, [currentSlide]);
    return (
        <div className="h-[100%] relative">
            <div className="absolute w-full h-full flex justify-between items-center z-10 cursor-pointer">
                <div onClick={previousSlide}>
                    <ChevronSVG direction="left" />
                </div>
                <div onClick={nextSlide}>
                    <ChevronSVG direction="right" />
                </div>
            </div>
            <div className={`flex justify-center items-center ${fadeIn ? '' : "hidden"}`}>
                <div className={`transition-opacity ${fadeIn ? 'opacity-100' : "opacity-0"} w-[70vw] h-[39.5vw] mx-auto`}>
                    <iframe
                        key={iframes[currentSlide].key}
                        src={iframes[currentSlide].src}
                        title={iframes[currentSlide].title}
                        className="w-full h-full rounded-sm shadow"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setFadeIn(true)}
                    />
                </div>
            </div>
            {!fadeIn &&
                <div className="flex justify-center items-center w-[70vw] h-[39.5vw] mx-auto bg-der-black rounded-sm shadow">
                    <Spinner />
                </div>
            }
            <div className="flex justify-center mt-3">
                {iframes.map((item, i) => <div key={i} className={`rounded-lg w-3 h-3 first:mr-3 ${currentSlide == i ? 'bg-gray-800' : 'bg-gray-300'}`}></div>)}
            </div>
        </div>
    )
}
export default VideosSLider