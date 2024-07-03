"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

import { type HubDetail } from "./get-hub"

export const getHubs = async () => {
  const { getToken } = auth()

  try {
    const hubs: HubDetail[] = await fetch(`${SERVER_URL}/api/chat/hubs`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json() as Promise<HubDetail[]>
      }
      return []
    })

    return hubs
  } catch (error) {
    return []
  }
}
