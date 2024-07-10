"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

type TCreatePackage = {
  subjectId: string
  video: string
  images: string[] | null
  pricePerHour: number
}

export const createPackage = async (data: TCreatePackage) => {
  console.log("🚀 ~ createPackage ~ data:", data)
  const { getToken } = auth()
  const packages = await fetch(`${SERVER_URL}/api/packages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
  console.log("🚀 ~ createPackage ~ packages:", packages)
  return packages
}
