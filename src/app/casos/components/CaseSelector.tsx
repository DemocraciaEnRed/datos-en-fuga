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
    <div className="flex flex-row flex-wrap justify-center">
      {
        cases.map((c: any) => {
          return (
            <Link href={`/casos/${c.id}`} key={c.id} scroll={false} className={`grayscale hover:grayscale-0 ${id === c.id ? 'grayscale-0' : ''}`}>
              <div className="relative w-[385px] mx-2 my-2 rounded-xl max-[390px]:w-[95%]">
                <p className='max-w-[385px] font-nippo z-10 absolute bottom-4 mx-5 text-3xl font-extrabold'>{c.name}</p>
                <Image
                  alt={c.name}
                  src={c.avatar}
                  placeholder="blur"
                  className='min-h-full min-w-full'
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