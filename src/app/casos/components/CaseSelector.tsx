'use client'

import React, { useState, useEffect } from 'react'
import cases from "../_cases.js"
import Image from "next/image"
import { notFound, useParams } from 'next/navigation.js'
import Link from 'next/link'
import CasesDescription from './CasesDescriptions'

const CaseSelector = () => {
  const [caso, setCaso] = useState('')
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      let caseId = String(id)
      const isValidCaso = cases.some(caso => caso.id == caseId)
      isValidCaso ? setCaso(caseId) : notFound()
    }
  }, [id])

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {
          cases.map((c) => {
            return (
              <Link href={`/casos/${c.id}#caseData`} key={c.id} className={`grayscale hover:grayscale-0 ${caso === c.id ? 'grayscale-0' : ''}`}>
                <div className="relative w-[385px] mx-2 my-2 rounded-xl max-[390px]:w-[95%]">
                  <p className='max-w-[385px] font-nippo z-10 absolute bottom-4 mx-5 text-3xl font-extrabold'>{c.name}</p>
                  <Image
                    alt={c.name}
                    src={c.avatar}
                    className='min-h-full min-w-full'
                  />
                </div>
              </Link>
            )
          })
        }
      </div>
      <CasesDescription id={caso} />
    </>
  )
}

export default CaseSelector