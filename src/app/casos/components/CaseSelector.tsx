import ChevronSVG from "@/app/components/ChevronSVG"
import Image from "next/image"
import Link from 'next/link'
import CaseItem from "./CaseItem"

const CaseSelector = ({ id, cases }: { id: string, cases: any[] }) => {
  // const [caso, setCaso] = useState('')
  // const { id } = useParams()
  // useEffect(() => {
  //   if (id) {
  //     let caseId = String(id)
  //     const isValidCaso = cases.some(caso => caso.id == caseId)
  //     isValidCaso ? setCaso(caseId) : notFound()
  //   }
  // }, [id])

  const selectedCaseIdx = cases.findIndex((c) => c.id === id)
  const previousCaseIdx = selectedCaseIdx === 0 ? cases.length - 1 : selectedCaseIdx - 1
  const nextCaseIdx = selectedCaseIdx === cases.length - 1 ? 0 : selectedCaseIdx + 1
  const previousCaseUrl = `/casos/${cases[previousCaseIdx].id}`
  const nextCaseUrl = `/casos/${cases[nextCaseIdx].id}`

  return (
    <div className="flex flex-row flex-wrap justify-center min-[1480px]:justify-between px-8 sm:px-[65px] md:px-[130px] relative" id="casos">
      <div className="absolute top-1/2 right-full z-10 cursor-pointer -translate-y-6 translate-x-10 block xl:hidden" >
        <Link href={previousCaseUrl} scroll={false}><ChevronSVG direction="left" color="black" /></Link>
      </div>
      <div className="absolute top-1/2 left-full z-10 cursor-pointer -translate-y-6 -translate-x-10 block xl:hidden">
        <Link href={nextCaseUrl} scroll={false}><ChevronSVG direction="right" color="black" /></Link>
      </div>
      {
        cases.map((c: any) => {
          return <CaseItem key={c.id} c={c} id={id}
            previousCaseUrl={previousCaseUrl}
            nextCaseUrl={nextCaseUrl}
          />
        }
        )
      }
    </div>
  )
}

export default CaseSelector