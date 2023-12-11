import { ISbStoryData } from "@storyblok/react";
import { LinkCustomAttributes, MARK_BOLD, MARK_LINK, MARK_STYLED, MARK_UNDERLINE, NODE_HEADING, NODE_HR, NODE_IMAGE, NODE_LI, NODE_OL, NODE_PARAGRAPH, NODE_QUOTE, NODE_UL, render } from "storyblok-rich-text-react-renderer";
import { ReactNode, createElement } from "react";
import Image from "next/image";
import emptyImg from "~/shared/not-available.png"
import Link from "next/link";

const Content = ({ document }: { document: ISbStoryData }) => {

    return <>
        {render(document, {
            markResolvers: {
                [MARK_BOLD]: (children) => <strong className="font-bold">{children}</strong>,
                [MARK_UNDERLINE]: (children) => <span className="underline underline-offset-2">{children}</span>,
                [MARK_STYLED]: (children: ReactNode, props: { class?: string | undefined }) => {
                    props.class == 'centered' ? props.class = 'text-center flex flex-col items-center' : null
                    props.class == 'to-left' ? props.class = 'text-left flex flex-col items-start' : null
                    props.class == 'to-right' ? props.class = 'text-right flex flex-col items-end' : null
                    props.class == 'img-fl' ? props.class = 'block float-left' : null
                    props.class == 'img-fr' ? props.class = 'block float-right' : null
                    return <span className={props.class}>{children}</span>
                },
                [MARK_LINK]: (children: ReactNode, props: {
                    linktype?: string;
                    href?: string;
                    target?: string;
                    anchor?: string;
                    uuid?: string;
                    custom?: LinkCustomAttributes;
                }) => {
                    const { linktype, href } = props;
                    if (linktype === 'email') {
                        // Email links: add `mailto:` scheme and map to <a>
                        return <a href={`mailto:${href}`}>{children}</a>;
                    }
                    if (href?.match(/^(https?:)?\/\//)) {
                        // External links: map to <a>
                        return <Link href={href} target="_blank" rel="noopener noreferrer">{children}</Link>;
                    }                    // Internal links: map to <Link>`
                    return <Link href={String(href)}>{children}</Link>;
                },
            },
            nodeResolvers: {
                [NODE_PARAGRAPH]: (children: ReactNode) => <p className="my-2">{children}</p>,
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
                [NODE_LI]: (children: ReactNode) => <li className="[&_p]:my-0 ml-5">{children}</li>,
                [NODE_QUOTE]: (children: ReactNode) => (
                    <blockquote className="pl-4 border-l-4 border-gray-300 italic">
                        {children}
                    </blockquote>),
                [NODE_HR]: () => <hr className="border-t-[1px] border-t-gray-300 my-4" />,
                [NODE_IMAGE]: (children: ReactNode, { src, alt, title }) => {
                    if (!alt) { alt = 'alternative image description not available' }
                    return <Image className="object-contain m-3" src={src ? src : emptyImg} alt={alt} title={title} width={500} height={500} />
                }
            },
            blokResolvers: {
                ['Youtube']: (props) => {
                    
                    console.log(props);
                    return <iframe
                    src={''}
                    title={''}
                    className="w-full h-full rounded-sm shadow"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                }
            }
        })}
    </>;
}

export default Content