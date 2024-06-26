import { getMessages } from '@/actions/chat/get-messages'
import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {
  activeHubId: string
}

export default async function ContentChat({ activeHubId }: Props) {
  const messages = await getMessages({ hubId: activeHubId })
  console.log({ messages })

  return <div className='flex-1 bg-background p-4'>Content</div>
}
