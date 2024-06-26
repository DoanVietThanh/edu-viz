import { Activity, Earth, User } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const RecommendStudents = () => {
  return (
    <div className='container mt-8'>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-semibold'>Tìm bạn học</p>
        <Button variant='link'>Xem thêm</Button>
      </div>
      <div className='my-4 grid gap-8 md:grid-cols-2'>
        <div className='flex cursor-pointer gap-8 rounded-md border p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-110'>
          <div className='flex items-center justify-between'>
            <Image
              src='/assets/avatar-student.jpg'
              alt='Avatar'
              width={200}
              height={200}
              layout='intrinsic'
              className='rounded-md'
            />
          </div>
          <div className='flex flex-col justify-start gap-4 text-xl font-medium'>
            <p className='flex items-center gap-4'>
              <User /> Student Name 1
            </p>
            <p className='flex items-center gap-4'>
              <Activity />
              22 age
            </p>
            <p className='flex items-center gap-4'>
              <Earth /> <span>Thu Duc city</span>
            </p>
          </div>
        </div>

        <div className='flex cursor-pointer gap-8 rounded-md border p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-110'>
          <div className='flex items-center justify-between'>
            <Image
              src='/assets/avatar-student.jpg'
              alt='Avatar'
              width={200}
              height={200}
              layout='intrinsic'
              className='rounded-md'
            />
          </div>
          <div className='flex flex-col justify-start gap-4 text-xl font-medium'>
            <p className='flex items-center gap-4 '>
              <User /> Student Name 2
            </p>
            <p className='flex items-center gap-4'>
              <Activity />
              24 age
            </p>
            <p className='flex items-center gap-4'>
              <Earth /> <span>Ha Noi capital</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendStudents
