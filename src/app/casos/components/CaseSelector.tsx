import ChevronSVG from "@/app/components/ChevronSVG"
import Image from "next/image"
import Link from 'next/link'

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

  return (
    <div className="flex flex-row flex-wrap justify-center min-[1480px]:justify-between px-8 sm:px-[65px] md:px-[130px] relative" id="casos">
      <div className="absolute top-1/2 right-full z-10 cursor-pointer -translate-y-6 translate-x-10 block xl:hidden" >
        <Link href={`/casos/${cases[previousCaseIdx].id}`} scroll={false}><ChevronSVG direction="left" color="black" /></Link>
      </div>
      <div className="absolute top-1/2 left-full z-10 cursor-pointer -translate-y-6 -translate-x-10 block xl:hidden">
        <Link href={`/casos/${cases[nextCaseIdx].id}`} scroll={false}><ChevronSVG direction="right" color="black" /></Link>
      </div>
      {
        cases.map((c: any, idx: number, casesArray: any) => {
          return (
            <>
              <Link href={`/casos/${c.id}`} key={c.id} scroll={false} className={`grayscale hover:grayscale-0 ${id === c.id ? 'grayscale-0' : 'hidden xl:block'} m-2 shadow-lg rounded-lg overflow-hidden`}>
                <div className="relative w-[385px] max-[390px]:w-[88vw] max-[1460px]:w-[320px]">
                  <p className='flex justify-center absolute w-full font-nippo z-10 bottom-4 text-3xl font-extrabold text-center text-white'>{c.name}</p>
                  <Image
                    alt={c.name}
                    src={c.avatar}
                    placeholder="blur"
                    className='min-h-full min-w-full object-cover'
                  />
                </div>
              </Link>
            </>
          )
        })
      }
    </div>
  )
}

export default CaseSelector