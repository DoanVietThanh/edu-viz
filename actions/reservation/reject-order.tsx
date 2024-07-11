"use server"

import { revalidatePath } from "next/cache"
import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

import { isBaseError } from "@/lib/utils"

export const rejectOrder = async (reservationId: string) => {
  const { getToken } = auth()

  try {
    const data = await fetch(
      `${SERVER_URL}/api/reservations/${reservationId}/reject`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    ).then((res) => res.json())

    const hubId = data?.hubId

    console.log("Testttttttt", { hubId })

    revalidatePath(`/chat/${hubId}`)
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
