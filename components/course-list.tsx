import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'
import { TutorType } from '@/types/tutor'
import { Activity, Earth, User } from 'lucide-react'

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
      <div className='my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {tutors.map((tutor, index) => (
          <Link href={`/tutor/${tutor.id}`} key={index}>
            <div
              key={tutor.id}
              className='flex gap-8 p-4 border rounded-md shadow-md cursor-pointer hover:font-semibold hover:scale-105 transition-all ease-in-out duration-300'
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
