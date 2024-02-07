// 'use client'
import Image from "next/image"
import Link from 'next/link'

const CaseSelector = ({ id, cases }: { id?: string, cases: any }) => {
  // const [caso, setCaso] = useState('')
  // const { id } = useParams()
  // useEffect(() => {
  //   if (id) {
  //     let caseId = String(id)
  //     const isValidCaso = cases.some(caso => caso.id == caseId)
  //     isValidCaso ? setCaso(caseId) : notFound()
  //   }
  // }, [id])

  return (
    <div className="flex flex-row flex-wrap justify-center" id="casos">
      {
        cases.map((c: any) => {
          return (
            <Link href={`/casos/${c.id}`} key={c.id} scroll={false} className={`grayscale hover:grayscale-0 ${id === c.id ? 'grayscale-0' : ''} m-2 shadow-lg rounded-lg overflow-hidden`}>
              <div className="relative w-[385px] max-[390px]:w-[88vw]">
                <p className='flex justify-center absolute w-full font-nippo z-10 bottom-4 text-3xl font-extrabold text-center text-white'>{c.name}</p>
                <Image
                  alt={c.name}
                  src={c.avatar}
                  placeholder="blur"
                  className='min-h-full min-w-full object-cover'
                />
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default CaseSelector