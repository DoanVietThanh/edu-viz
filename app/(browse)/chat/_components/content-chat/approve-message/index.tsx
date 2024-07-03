import Actions from './actions'
import { MessageDetail } from '@/actions/chat/get-messages'
import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

type Props = { message: MessageDetail; otherUser: User }

function ApproveMessage({ message, otherUser }: Props) {
  const reservation = message.reservation!
  const isTutor = reservation.studentId === otherUser.id

  return (
    <div className='flex min-h-full w-full flex-col gap-y-1 rounded-lg border-2 border-primary bg-muted p-4'>
      <div className='font-bold'>{!isTutor ? otherUser.fullName : 'You'} has approved the reservation</div>
      <div className='flex flex-wrap items-center gap-1 text-sm font-bold text-muted-foreground'>
        <div className='text-foreground'>Order:</div>
        <div className='flex items-center text-coin'>
          <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
          {reservation.paidPrice}
        </div>
        <div>/</div>
        {reservation.package.subject.name} in {reservation.duration} hours
      </div>
      <p className='flex items-center gap-1'>
        {!isTutor
          ? 'Enjoy learning and click the confirm button when you complete the service'
          : 'Remind students to click the confirm button after the service is complete.'}
      </p>
      {!isTutor && reservation.status === 'Progress' && <Actions reservationId={reservation.id} />}
    </div>
  )
}

export default ApproveMessage
