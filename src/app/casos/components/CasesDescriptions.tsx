import React from 'react'
import Image from "next/image"
import cases from "../_cases.js"

const CasesDescription = ({id} : { id: number }) => {
  let casos = cases.find((c) => c.id === id)
  let content: React.ReactElement | undefined 

  if (casos && casos.content) {
    content = casos?.content
  } else return

  return (
    <div className='my-6 text-black mx-14'>
        <h3 className='font-extrabold text-2xl'>{casos.name}</h3>
        <div className='flex flex-row justify-between'>
          <p className='text-xl'>{casos.occupation}</p>
          <p>{casos.year}</p>
        </div>
        <hr className="border-black border-0.5 my-1" />

        <div className='my-6'>
          <p className='font-extrabold'>
            {casos.subtitle}
          </p>
          <br />
          <div>
            {
              content
            }
          </div>
          <div className='flex flex-row flex-wrap gap-2 my-6'>
            {casos?.buttons?.map((b) => {
              return (
                  <a href="#reporta" type="button" className="border-2 border-black rounded-xl p-2 bg-[#212121] text-white w-[350px] text-center flex flex-row justify-between items-center" key={b.id}>
                    <Image
                      alt="icon"
                      src={b.icon}
                      height={25}
                      width={25}
                      className='mx-2 max-[320px]:w-[20px] max-[320px]:h-[20px]'
                    />
                    <span className='flex-grow'>{b.text}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
  )
}


export default CasesDescription