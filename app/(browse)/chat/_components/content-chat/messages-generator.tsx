import ApproveMessage from './approve-message'
import CompleteMessage from './complete-message'
import OrderMessage from './order-message'
import RejectMessage from './reject-message'
import { MessageDetail } from '@/actions/chat/get-messages'
import { cn } from '@/lib/utils'
import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

type Props = {
  otherUser: User
  messages: MessageDetail[]
}

function MessagesGenerator({ otherUser, messages }: Props) {
  return (
    <>
      {messages.map((message, i) => {
        if (message.senderId !== otherUser.id)
          return (
            <div key={message.id} className='my-1 w-fit max-w-[50%] self-end'>
              <MessageContent otherUser={otherUser} message={message} />
            </div>
          )

        const nextMessage = i < messages.length - 1 ? messages[i + 1] : null
        const isLastMessageInSequence = i == messages.length - 1 || otherUser.id !== nextMessage?.senderId

        return (
          <div key={message.id} className='my-1 flex gap-2'>
            {isLastMessageInSequence ? (
              <div>
                <Image
                  alt='other-user-avatar'
                  src={otherUser.avatar}
                  className='mt-1 rounded-full object-cover'
                  height={36}
                  width={36}
                />
              </div>
            ) : (
              <div className='size-9'></div>
            )}
            <div className='w-fit max-w-[50%]'>
              <MessageContent otherUser={otherUser} message={message} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MessagesGenerator

function MessageContent({ message, otherUser }: { message: MessageDetail; otherUser: User }) {
  if (message.type === 'Text') {
    return (
      <div
        className={cn(
          'px-3 py-2 rounded-lg',
          otherUser.id !== message.senderId ? 'text-primary-foreground bg-primary' : 'bg-muted'
        )}
      >
        {message.content}
      </div>
    )
  }

  if (message.type === 'Video') {
    return <div>video</div>
  }

  if (message.type === 'Image') {
    return <div>image</div>
  }

  if (message.type === 'ReservationOrder') {
    return <OrderMessage message={message} otherUser={otherUser} />
  }

  if (message.type === 'ReservationReject') {
    return <RejectMessage message={message} otherUser={otherUser} />
  }

  if (message.type === 'ReservationApprove') {
    return <ApproveMessage message={message} otherUser={otherUser} />
  }

  if (message.type === 'ReservationComplete') {
    return <CompleteMessage message={message} otherUser={otherUser} />
  }

  return null
}
