'use server'

import { eduVizFetch, isBaseError } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

import { SERVER_URL } from '@/constants/env-config'

export const rejectOrder = async (reservationId: string) => {
  const { getToken } = auth()

  try {
    const data = await eduVizFetch<{ hubId: string }>(`${SERVER_URL}/api/reservations/${reservationId}/reject`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    })

    const hubId = data?.hubId
    revalidatePath(`/chat/${hubId}`)
  } catch (error) {
    let messageError = ''
    if (!isBaseError(error) || error.statusCode === 500) {
      messageError = 'Something went wrong'
    } else {
      messageError = error.message
    }

    throw new Error(messageError)
  }
}
