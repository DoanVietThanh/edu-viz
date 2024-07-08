'use server'

import { isBaseError } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

import { SERVER_URL } from '@/constants/env-config'

export const getPackageFeedbacks = async (packageId: string, tutorId: string) => {
  const { getToken } = auth()
  const packageFeedbacks = await fetch(`${SERVER_URL}/api/packages/${packageId}/feedbacks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${await getToken()}`
    },
    cache: 'no-store'
  }).then((res) => res.json())
  return packageFeedbacks
}
