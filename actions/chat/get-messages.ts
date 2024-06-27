'use server'

import { auth } from '@clerk/nextjs/server'
import { Message } from '@prisma/client'

import { SERVER_URL } from '@/constants/env-config'

type GetJobParams = {
  hubId: string
  pageSize?: number
  pageNumber?: number
}

export const getMessages = async ({ hubId, pageNumber = 1, pageSize = 30 }: GetJobParams) => {
  const { getToken } = auth()

  try {
    const messages: Message[] = await fetch(
      `${SERVER_URL}/api/chat/hubs/${hubId}/messages?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      }
    ).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return []
    })

    return messages
  } catch (error) {
    return []
  }
}
