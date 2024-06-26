import React from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const TutorComment = () => {
  return (
    <div>
      <h1 className='text-center font-serif text-2xl font-semibold'>Comment</h1>
      <Textarea className='my-4 p-4' placeholder='Comment' rows={5} />
      <div className='flex justify-end'>
        <Button variant='primary' className=''>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default TutorComment
