import { cn } from '@/lib/utils'
import { Message, User } from '@prisma/client'
import moment from 'moment'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  currentUser: User
  otherUser: User
  lastMessage: Message
  hubId: string
}

function HubItem({ currentUser, hubId, lastMessage, otherUser }: Props) {
  console.log({ hubId })

  let messageContent = lastMessage.senderId === currentUser.id ? 'You' : otherUser.fullName.split(' ').at(-1)

  switch (lastMessage.type) {
    case 'Text': {
      messageContent += `: ${lastMessage.content}`
      break
    }
    case 'Image': {
      messageContent += ' has sent a image'
      break
    }
    case 'Video': {
      messageContent += ' has sent a video'
      break
    }
    case 'ReservationOrder': {
      messageContent += ' has ordered a package'
      break
    }
    case 'ReservationApprove': {
      messageContent += ' has approved the order'
      break
    }
    case 'ReservationReject': {
      messageContent += ' has rejected the order'
      break
    }
    case 'ReservationComplete': {
      messageContent += ' has completed the order'
      break
    }
  }

  return (
    <div className='flex cursor-pointer items-center gap-4 border px-4 py-2 hover:bg-slate-200'>
      <Avatar>
        <AvatarImage src={otherUser.avatar} alt='@shadcn' />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <div className='flex flex-1 flex-col'>
        <p className='line-clamp-1 font-semibold'>{otherUser.fullName}</p>
        <div
          className={cn(
            'flex items-center text-muted-foreground gap-x-2 justify-between w-full',
            !lastMessage.isSeen && 'font-bold text-foreground'
          )}
        >
          <p className='line-clamp-1 flex-1 text-sm'>{messageContent}</p>
          <p className='shrink-0 text-xs'>{moment(lastMessage.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  )
}

export default HubItem
