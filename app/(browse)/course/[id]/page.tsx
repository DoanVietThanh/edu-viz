import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Star } from 'lucide-react'

type CourseDetailPageProps = {
  params: {
    id: string
  }
}

const CourseDetailPage = ({ params }: CourseDetailPageProps) => {
  return (
    <div>
      <div className='flex-1 flex border w-full overflow-hidden '>
        <div className='p-8 text-2xl w-1/5 border '>
          <p className='font-semibold text-center'>Filter</p>
          <Input type='text' placeholder='Search tutor name' className='w-full my-4' />
          <div className='flex items-center gap-4'>
            <Label>Year of Experience</Label>
            <Input type='number' placeholder='10' className='w-1/3 my-4' />
          </div>
        </div>

        <div className='flex-1 p-8 overflow-y-auto bg-[#F5F7F8]'>
          <h1 className='font-semibold text-3xl'>Course Name {params.id} </h1>
          <div className='my-8 grid md:grid-cols-4 gap-8'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Link href={`/tutor/${index + 1}`} key={index}>
                <div
                  key={index}
                  className='bg-white flex flex-col items-center justify-center cursor-pointer p-4 rounded-md shadow-md border hover:scale-105 transition-all ease-in-out duration-300'
                >
                  <Image
                    src='/assets/avatar-tutor.png'
                    alt='Avatar'
                    width={200}
                    height={200}
                    layout='intrinsic'
                    className='rounded-md'
                  />
                  <p className='text-xl font-medium m-2'>Tutor Name {index + 1}</p>
                  <p className='text-sm text-muted-foreground'>
                    Exp {index + 30} years - Age {index + 70}
                  </p>
                  <p className='text-md text-yellow-500 my-2'>Price $7 / hours</p>
                  <p className='flex gap-2 items-center my-2 text-sm text-muted-foreground font-medium text-[#f59e0b]'>
                    <Star size={18} fill='#f59e0b' />
                    <Star size={18} fill='#f59e0b' />
                    <Star size={18} fill='#f59e0b' />
                    <Star size={18} fill='#f59e0b' />
                    <Star size={18} fill='#f59e0b' />
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className='flex justify-center'>
            <Button>Xem thêm</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseDetailPage
