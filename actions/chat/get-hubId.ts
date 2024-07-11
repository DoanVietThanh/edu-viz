"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

import { isBaseError } from "@/lib/utils"

export const getHubId = async (otherUserId: string) => {
  const { getToken } = auth()
  try {
    const hubId = await fetch(
      `${SERVER_URL}/api/chat/hubs/get-hub-id/${otherUserId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    ).then((res) => res.json())

    console.log({ hubId })

    return hubId
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
