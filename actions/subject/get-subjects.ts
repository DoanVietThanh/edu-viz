'use server'

import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const getSubjects = async () => {
  const { getToken } = auth()
  const subjects = await fetch(`${SERVER_URL}/api/subjects`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  }).then((res) => res.json())
  return subjects
}
