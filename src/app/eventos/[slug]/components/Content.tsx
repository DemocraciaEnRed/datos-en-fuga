import { ISbStoryData } from "@storyblok/react";
import { MARK_BOLD, MARK_UNDERLINE, NODE_HEADING, NODE_HR, NODE_IMAGE, NODE_LI, NODE_OL, NODE_PARAGRAPH, NODE_QUOTE, NODE_UL, render } from "storyblok-rich-text-react-renderer";
import { ReactNode, createElement } from "react";
import Image from "next/image";
import emptyImg from "~/shared/not-available.png"

const Content = ({ document }: { document: ISbStoryData }) => {

    return <>
        {render(document, {
            markResolvers: {
                [MARK_BOLD]: (children) => <strong className="font-bold">{children}</strong>,
                [MARK_UNDERLINE]: (children) => <span className="underline underline-offset-2">{children}</span>
            },
            nodeResolvers: {
                [NODE_PARAGRAPH]: (children: ReactNode) => <p className="mb-2">{children}</p>,
                [NODE_HEADING]: (children: ReactNode, { level }) => {
                    let elem = ''
                    let setClass = ''
                    if (level === 1) { elem = 'h1'; setClass = 'text-4xl md:text-6xl' }
                    if (level === 2) { elem = 'h2'; setClass = 'text-3xl md:text-5xl' }
                    if (level === 3) { elem = 'h3'; setClass = 'text-2xl md:text-4xl' }
                    if (level === 4) { elem = 'h4'; setClass = 'text-xl md:text-3xl' }
                    if (level === 5) { elem = 'h5'; setClass = 'text-lg md:text-2xl' }
                    if (level === 6) { elem = 'h6'; setClass = 'text-lg md:text-xl' }

                    return createElement(elem, setClass ? { className: `${setClass} mb-5 font-bold` } : null, children)
                },
                [NODE_OL]: (children: ReactNode) => <ol className="list-decimal my-5">{children}</ol>,
                [NODE_UL]: (children: ReactNode) => <ul className="list-disc my-5">{children}</ul>,
                [NODE_LI]: (children: ReactNode) => <li className="[&_p]:my-0">{children}</li>,
                [NODE_QUOTE]: (children: ReactNode) => (
                    <blockquote className="pl-4 border-l-4 border-gray-300 italic">
                        {children}
                    </blockquote>),
                [NODE_HR]: () => <hr className="border-t-[1px] border-t-gray-300 my-4" />,
                [NODE_IMAGE]: (children: ReactNode, { src, alt, title }) => {
                    if (!alt) { alt = 'alternative image description not available' }
                    return <Image className="object-contain m-auto" src={src ? src : emptyImg} alt={alt} title={title} width={500} height={500}/>
                }
            }
        })}
    </>;
}

export default Content