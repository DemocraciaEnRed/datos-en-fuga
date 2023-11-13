'use client' 

import React, { useState, useEffect } from 'react'
import cases from "../_cases.js"
import Image from "next/image"
import { notFound, useParams } from 'next/navigation.js'
import Link from 'next/link'
import CasesDescription from './CasesDescriptions' 

const CaseSelector = () => {
  const [caso, setCaso] = useState(0)
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      let caseId = Number(id)
      if (caseId === undefined) return
      if(isNaN(caseId)) return
      else if (caseId > 0 && caseId <= cases.length) {
        setCaso(caseId)
      } else {
        notFound()
      }
    }
  }, [caso, id])

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {
          cases.map((c) => {
            return (
              <Link href={`/casos/${c.id}`} key={c.id} className={`grayscale hover:grayscale-0 ${caso === c.id ? 'grayscale-0' : ''}`}>
                <div className="h-[405px] w-[385px] mx-2 my-2 rounded-xl max-[390px]:w-[95%]">
                  <p className='font-nippo z-10 absolute mt-80 mx-5 text-3xl font-extrabold'>{c.name}</p>
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
      {
        caso !== 0 && (
          <CasesDescription id={caso} />
        )
      }
    </>
  )
}

export default CaseSelector