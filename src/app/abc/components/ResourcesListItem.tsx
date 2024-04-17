import Link from "next/link"
type RSRC = {
    title: string;
    link: string;
    is2Cols?: boolean;
}

const ResourcesListItem = ({ rsrc }: { rsrc: RSRC }) => {
    return (
        <Link href={rsrc.link} className={`bg-white shadow-md rounded-lg overflow-hidden ${rsrc.is2Cols && 'col-span-2'}`}>
            <p className="h-full border-l-8 border-red-600 py-2 pl-4 text-left uppercase" >{rsrc.title}</p>
        </Link>
    )
}
export default ResourcesListItem