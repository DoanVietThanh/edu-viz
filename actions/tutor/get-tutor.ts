'use server'

import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const getTutor = async (tutorId: string) => {
  const { getToken } = auth()
  const tutor = await fetch(`${SERVER_URL}/api/tutors/${tutorId}`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  }).then((res) => res.json())
  return tutor
}
