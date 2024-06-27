import { Message, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

type Props = {
  otherUser: User
  messages: Message[]
}

function MessageGenerator({ otherUser, messages }: Props) {
  return (
    <>
      {messages.map((message, i) => {
        if (message.senderId !== otherUser.id)
          return (
            <div
              key={message.id}
              className='my-1 flex w-fit max-w-[50%] flex-col self-end rounded-lg border bg-primary px-3 py-2 text-white'
            >
              <div>{message?.content || message.type}</div>
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
            <div className='flex w-fit max-w-[50%] flex-col rounded-lg border bg-slate-200 px-3 py-2'>
              <div className='text-black'>{message?.content || message.type}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MessageGenerator
