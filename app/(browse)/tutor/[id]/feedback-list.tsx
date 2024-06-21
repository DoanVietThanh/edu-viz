import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Edit, Heart, Trash } from 'lucide-react'

const FeedbackList = () => {
  return (
    <div className='flex flex-col gap-4'>
      {[1, 2].map((i) => (
        <div key={i} className={`flex flex-col gap-2 border p-4 rounded-2xl shadow-lg hover:bg-slate-100`}>
          <div className='flex gap-4 justify-between items-center px-4'>
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
            <div className='flex gap-4 items-center'>
              <Edit className='mr-2 h-6 w-6' />
              <Trash className='h-6 w-6' />
            </div>
          </div>
          <div className='p-4 font-medium flex gap-4'>
            I love this guy so much <Heart className='h-6 w-6' color='red' fill='red' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList
