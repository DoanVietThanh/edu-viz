import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative my-4 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl text-3xl shadow-lg'>
      <Image src='/assets/banner.jpg' alt='banner' fill />
    </div>
  )
}

export default Banner
