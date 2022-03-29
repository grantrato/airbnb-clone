import Image from 'next/image'
import React from 'react'

export default function MediumCard ({ img, title }) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out m-2'>
      <div className='relative h-80 w-80 '>
        <Image
          src={img}
          layout='fill'
          alt={title}
          className='rounded-lg'
        />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}
