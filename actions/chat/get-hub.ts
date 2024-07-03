"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"
import { type Message, type User } from "@prisma/client"

export type HubDetail = {
  currentUser: User
  otherUser: User
  lastMessage: Message
  id: string
}

export const getHub = async (hubId: string) => {
  const { getToken } = auth()

  try {
    const hub: HubDetail | null = await fetch(
      `${SERVER_URL}/api/chat/hubs/${hubId}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json() as Promise<HubDetail>
      }
      return null
    })

    return hub
  } catch (error) {
    return null
  }
}
