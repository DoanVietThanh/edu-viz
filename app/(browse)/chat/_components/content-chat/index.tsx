import MessagesGenerator from './messages-generator'
import NewMessages from './new-messages'
import { getMessages } from '@/actions/chat/get-messages'
import { User } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {
  activeHubId: string
  otherUser: User
}

export default async function ContentChat({ activeHubId, otherUser }: Props) {
  const messages = await getMessages({ hubId: activeHubId })

  return (
    <div className='flex w-full flex-1 flex-col-reverse overflow-y-auto bg-background p-4 px-3 py-2'>
      <NewMessages otherUser={otherUser} />
      <MessagesGenerator messages={messages} otherUser={otherUser} />
    </div>
  )
}

export function ContentChatSkeleton() {
  return (
    <div className='flex flex-1 items-center justify-center p-4'>
      <Loader2 className='size-12 animate-spin' />
    </div>
  )
}
