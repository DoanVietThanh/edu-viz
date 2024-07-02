import { MessageDetail } from '@/actions/chat/get-messages'
import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'

type Props = { message: MessageDetail; otherUser: User }

function OrderMessage({ message, otherUser }: Props) {
  const reservation = message.reservation!
  const isTutor = reservation.studentId === otherUser.id

  return (
    <div className='flex min-h-full w-full flex-col gap-y-1 rounded-lg border-2 border-primary bg-muted p-4'>
      <div className='font-bold'>{isTutor ? otherUser.fullName : 'You'} has order a reservation</div>
      <div className='flex flex-wrap items-center gap-1 text-sm font-bold text-muted-foreground'>
        <div className='text-foreground'>Order:</div>
        <div className='flex items-center text-coin'>
          <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
          {reservation.paidPrice}
        </div>
        <div>/</div>
        {reservation.package.subject.name} in {reservation.duration} hours
      </div>
      <p>
        Waiting for {isTutor ? 'you' : 'tutor'} to accept order. Order will be automatically canceled if{' '}
        {isTutor ? 'you do' : 'tutor does'} not respond within 1 hour.
      </p>
      {isTutor && (
        <div className='flex items-center justify-end gap-x-4'>
          <Button variant='outline'>Reject</Button>
          <Button>Approve</Button>
        </div>
      )}
    </div>
  )
}

export default OrderMessage

//TODO: remain time
