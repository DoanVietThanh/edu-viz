"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

export const getSubjects = async () => {
  const { getToken } = auth()
  const subjects = await fetch(`${SERVER_URL}/api/subjects`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  }).then((res) => res.json())
  return subjects
}
