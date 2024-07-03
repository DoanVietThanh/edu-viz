"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"
import {
  type Message,
  type Package,
  type Reservation,
  type Subject,
} from "@prisma/client"

type GetJobParams = {
  hubId: string
  pageSize?: number
  pageNumber?: number
}

export type MessageDetail = Message & {
  reservation:
    | (Reservation & {
        package: Package & {
          subject: Subject
        }
      })
    | undefined
}

export const getMessages = async ({
  hubId,
  pageNumber = 1,
  pageSize = 30,
}: GetJobParams) => {
  const { getToken } = auth()

  try {
    const messages: MessageDetail[] = await fetch(
      `${SERVER_URL}/api/chat/hubs/${hubId}/messages?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json() as Promise<MessageDetail[]>
      }
      return []
    })

    return messages
  } catch (error) {
    return []
  }
}
