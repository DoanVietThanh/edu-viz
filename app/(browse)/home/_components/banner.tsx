import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex justify-center items-center h-[300px] w-full my-4 rounded-3xl shadow-lg text-3xl overflow-hidden'>
      <Image src='/assets/banner.jpg' alt='banner' width={1200} height={300} layout='responsive' />
    </div>
  )
}

export default Banner
