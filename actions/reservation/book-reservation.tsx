"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

export const bookReservation = async (packageId: string, duration: number) => {
  const { getToken } = auth()
  const response = await fetch(`${SERVER_URL}/api/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify({ packageId, duration: Number(duration) }),
  })

  if (!response.ok) {
    const errors = await response.json()
    console.log(errors.message)
    throw new Error(errors.message)
  }
}
