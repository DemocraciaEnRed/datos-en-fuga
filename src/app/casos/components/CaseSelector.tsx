'use client'
import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from 'next/link'
import CasesDescription from "./CasesDescriptions";
import cases from '../_cases'


const CaseSelector = () => {
  const [caso, setCaso] = useState({})
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      let caseId = String(id)
      if (caseId === 'index') return setCaso({})
      const caso = cases.find((c) => c.id === caseId)
      if (caso) setCaso(caso)
      else notFound()
      return
    }
  }, [id])

  return (
    <>
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
      {Object.keys(caso).length > 0 && <CasesDescription caso={caso} />}
    </>
  )
}

export default CaseSelector