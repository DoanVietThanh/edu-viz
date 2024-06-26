import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='my-4 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl text-3xl shadow-lg'>
      <Image src='/assets/banner.jpg' alt='banner' width={1200} height={300} layout='responsive' />
    </div>
  )
}

export default Banner
