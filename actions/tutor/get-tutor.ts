"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

import { isBaseError } from "@/lib/utils"

export const getTutor = async (tutorId: string) => {
  try {
    const { getToken } = auth()
    const tutor = await fetch(`${SERVER_URL}/api/tutors/${tutorId}`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
      cache: "no-store",
    }).then((res) => res.json())
    return tutor
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
