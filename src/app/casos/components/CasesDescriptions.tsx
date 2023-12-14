import React from 'react'
import Image, { StaticImageData } from "next/image"


const CasesDescription = ({ caso }: { caso: any }) => {
  // let casos = cases.find((c) => c.id === id)
  let content: React.ReactElement | undefined

  if (caso && caso.content) {
    content = caso?.content
  } else return

  return (
    <div className='my-6 text-black mx-14'>
      <h3 className='font-extrabold text-2xl'>{caso.name}</h3>
      <div className='flex flex-row justify-between'>
        <p className='text-xl'>{caso.occupation}</p>
        <p>{caso.year}</p>
      </div>
      <hr className="border-black border-0.5 my-1" />

      <div className='my-6'>
        <p className='font-extrabold'>
          {caso.subtitle}
        </p>
        <div className='mt-4'>{content}</div>
        <div className='flex flex-row flex-wrap gap-2 my-6'>
          {caso?.buttons?.map((b: Button) => {
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
export interface Button {
  id: number;
  icon: StaticImageData;
  text: string;
}