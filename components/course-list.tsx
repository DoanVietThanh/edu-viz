import { Button } from './ui/button'
import { TutorType } from '@/types/tutor'
import { Activity, Earth, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CourseListProps = {
  courseId: string
  title: string
  tutors: TutorType[]
}

const CourseList = ({ title, tutors, courseId }: CourseListProps) => {
  return (
    <div className='my-8'>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-semibold'>{title}</p>
        <Button variant='link' asChild>
          <Link href={`/course/${courseId}`}>Xem thêm</Link>
        </Button>
      </div>
      <div className='my-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {tutors.map((tutor, index) => (
          <Link href={`/tutor/${tutor.id}`} key={index}>
            <div
              key={tutor.id}
              className='flex cursor-pointer gap-8 rounded-md border p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold'
            >
              <div className='flex items-center justify-between overflow-hidden'>
                <Image
                  src={tutor.avatar}
                  alt='Avatar'
                  width={100}
                  height={100}
                  layout='intrinsic'
                  className='rounded-md'
                />
              </div>
              <div className='flex flex-col justify-start gap-4 text-sm'>
                <p className='flex items-center gap-4'>
                  <User /> {tutor.name}
                </p>
                <p className='flex items-center gap-4'>
                  <Activity />
                  {tutor.age} age
                </p>
                <p className='flex items-center gap-4'>
                  <Earth /> <span>Thu Duc city</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CourseList
