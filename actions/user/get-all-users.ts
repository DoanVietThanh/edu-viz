"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

export const getAllUsers = async () => {
  const { getToken } = auth()
  const users = await fetch(`${SERVER_URL}/api/users/all`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  }).then((res) => res.json())
  return users
}
