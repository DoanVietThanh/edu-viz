import { Edit, Heart, Trash } from 'lucide-react'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const FeedbackList = () => {
  return (
    <div className='flex flex-col gap-4'>
      {[1, 2].map((i) => (
        <div key={i} className={`flex flex-col gap-2 rounded-2xl border p-4 shadow-lg hover:bg-slate-100`}>
          <div className='flex items-center justify-between gap-4 px-4'>
            <div className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src={`/assets/avatar-student.jpg`} alt='@shadcn' />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <div className='flex items-center gap-4'>
                  <div className='font-serif text-2xl font-semibold'>Name</div>
                  <div className='font-semibold'>{new Date().toDateString()}</div>
                </div>
                <div className='italic'>Ratings {Array.from({ length: 5 }).map(() => '⭐️')}</div>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Edit className='mr-2 size-6' />
              <Trash className='size-6' />
            </div>
          </div>
          <div className='flex gap-4 p-4 font-medium'>
            I love this guy so much <Heart className='size-6' color='red' fill='red' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList
