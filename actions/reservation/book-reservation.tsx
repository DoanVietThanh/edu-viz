'use server'

import { isBaseError } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const bookReservation = async (packageId: string, duration: number) => {
  const { getToken } = auth()
  try {
    const packages = await fetch(`${SERVER_URL}/api/reservations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getToken()}`
      },
      body: JSON.stringify({ packageId, duration })
    }).then((res) => res.json())
    return packages
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
