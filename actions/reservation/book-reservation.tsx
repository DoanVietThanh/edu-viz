'use server'

import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const bookReservation = async (packageId: string, duration: number) => {
  console.log('Testttt: ', Number(duration))
  try {
    const { getToken } = auth()
    const token = await getToken()

    const response = await fetch(`${SERVER_URL}/api/reservations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ packageId, duration: Number(duration) })
    })
    const packages = await response.json()

    if (!response.ok) {
      throw new Error(packages.message || 'Something went wrong')
    }

    return packages
  } catch (error: any) {
    let messageError = error.message || 'Something went wrong'
    throw new Error(messageError)
  }
}
