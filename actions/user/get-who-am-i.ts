"use server"

import { SERVER_URL } from "@/constants/env-config"
import { type UserWithRole } from "@/context/auth-provider"
import { auth } from "@clerk/nextjs/server"

import { isBaseError } from "@/lib/utils"

export const getCurrentUser = async () => {
  try {
    const { getToken } = auth()
    const currentUser = await fetch(`${SERVER_URL}/api/users/who-am-i`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    }).then((res) => res.json() as Promise<UserWithRole>)
    return currentUser
  } catch (error) {
    let messageError = ""
    if (!isBaseError(error) || error.statusCode === 500) {
      messageError = "Something went wrong"
    } else {
      messageError = error.message
    }

    throw new Error(messageError)
  }
}
