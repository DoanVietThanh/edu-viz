"use server"

import { revalidatePath } from "next/cache"
import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

import { eduVizFetch, isBaseError } from "@/lib/utils"
import { type TCompleteOrderSchema } from "@/lib/validation/reservation.revalidation"

export const completeOrder = async ({
  reservationId,
  value,
  content,
}: TCompleteOrderSchema) => {
  const { getToken } = auth()

  try {
    const data = await eduVizFetch<{ hubId: string }>(
      `${SERVER_URL}/api/reservations/${reservationId}/complete`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({ value, content }),
      }
    )

    const hubId = data?.hubId
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
