'use server'

import { auth } from '@clerk/nextjs/server'
import { Message, User } from '@prisma/client'

import { SERVER_URL } from '@/constants/env-config'

export type HubDetail = { currentUser: User; otherUser: User; lastMessage: Message; id: string }

export const getHub = async (hubId: string) => {
  const { getToken } = auth()

  try {
    const hub: HubDetail = await fetch(`${SERVER_URL}/api/chat/hubs/${hubId}`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return null
    })

    return hub
  } catch (error) {
    return null
  }
}
