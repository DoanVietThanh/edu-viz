import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Calendar, Mail, Phone } from 'lucide-react'

const TutorInfo = () => {
  return (
    <div className='flex-1 flex justify-center gap-8 p-8'>
      <div className='rounded-lg shadow-lg p-4 overflow-hidden'>
        <Image
          src='/assets/avatar-tutor.png'
          alt='Avatar'
          width={400}
          height={400}
          layout='intrinsic'
          className='rounded-md'
        />
      </div>
      <div className='flex-1 p-4 border flex flex-col justify-between bg-white shadow-md px-20'>
        <p className='text-3xl font-serif'>Mr. Albert Einstein</p>

        <div className='flex justify-between text-muted-foreground'>
          <p className='text-xl font-sans flex items-center gap-4'>70 years old</p>
          <p className='text-xl font-sans flex items-center gap-4'>30 Years of experience</p>
        </div>

        <div className='flex justify-between text-muted-foreground'>
          <p className='text-xl font-sans flex items-center gap-4'>
            <Phone /> 012.3456.789
          </p>
          <p className='text-xl font-sans flex items-center gap-4'>
            <Mail /> tutor@fpt.edu.vn
          </p>
        </div>

        <p className='text-xl font-sans flex items-center gap-4 font-semibold'>
          <Calendar /> Monday Wednesday Friday (9:00 AM - 5:00 PM)
        </p>

        <div className='flex justify-between'>
          <p className='text-xl font-sans font-semibold flex items-center gap-4 text-yellow-700'>
            <span>Price: $7 / hour</span>
          </p>
          <Button variant={'primary'}>Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default TutorInfo
