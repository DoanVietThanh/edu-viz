'use server'

import { SERVER_URL } from '@/constants/env-config'
import { auth, currentUser } from '@clerk/nextjs/server'
import { Hub, Message, User } from '@prisma/client'

export type Hubs = { currentUser: User; otherUser: User; lastMessage: Message; id: string }[]

export const getHubs = async () => {
  const { getToken } = auth()

  const hubs: Hubs = await fetch(`${SERVER_URL}/api/chat/hubs`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  }).then((res) => res.json())

  return hubs
}
