"use server"

import { revalidatePath } from "next/cache"
import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

type TCreatePackage = {
  subjectId: string
  video: string
  images: string[] | null
  pricePerHour: number
}

export const createPackage = async (data: TCreatePackage) => {
  const { getToken } = auth()
  const packages = await fetch(`${SERVER_URL}/api/packages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify(data),
  })

  if (!packages.ok) {
    const errors = await packages.json()
    console.log(errors.message)
    throw new Error(errors.message)
  }
  revalidatePath(`/user/packages`)
}
