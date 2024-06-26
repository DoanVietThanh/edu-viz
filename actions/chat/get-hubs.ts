'use server'

import { auth } from '@clerk/nextjs/server'
import { Message, User } from '@prisma/client'

import { SERVER_URL } from '@/constants/env-config'

export type HubDetail = { currentUser: User; otherUser: User; lastMessage: Message; id: string }

export const getHubs = async () => {
  const { getToken } = auth()

  const hubs: HubDetail[] = await fetch(`${SERVER_URL}/api/chat/hubs`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  }).then((res) => res.json())

  return hubs
}
