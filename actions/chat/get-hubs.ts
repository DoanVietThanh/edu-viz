'use server'

import { HubDetail } from './get-hub'
import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const getHubs = async () => {
  const { getToken } = auth()

  const hubs: HubDetail[] = await fetch(`${SERVER_URL}/api/chat/hubs`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  }).then((res) => res.json())

  return hubs
}
