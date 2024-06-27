'use server'

import { HubDetail } from './get-hub'
import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const getHubs = async () => {
  const { getToken } = auth()

  try {
    const hubs: HubDetail[] = await fetch(`${SERVER_URL}/api/chat/hubs`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return []
    })

    return hubs
  } catch (error) {
    return []
  }
}
