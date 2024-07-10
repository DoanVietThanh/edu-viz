'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

import { SERVER_URL } from '@/constants/env-config'

type TCreatePackage = {
  subjectId: string
  video: string
  images: string[] | null
  pricePerHour: number
}

export const createPackage = async (data: TCreatePackage) => {
  console.log('🚀 ~ createPackage ~ data:', data)
  const { getToken } = auth()
  const packages = await fetch(`${SERVER_URL}/api/packages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getToken()}`
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
  console.log('🚀 ~ createPackage ~ packages:', packages)
  return packages
}
