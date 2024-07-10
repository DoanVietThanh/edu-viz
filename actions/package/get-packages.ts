"use server"

import { SERVER_URL } from "@/constants/env-config"
import { auth } from "@clerk/nextjs/server"

export const getPackages = async () => {
  const { getToken } = auth()
  const packages = await fetch(`${SERVER_URL}/api/packages`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  }).then((res) => res.json())
  return packages
}

export const getPackagesBySubjectName = async (subjectName: string) => {
  const { getToken } = auth()
  const packages = await fetch(
    `${SERVER_URL}/api/packages?subjectName=${subjectName}`,
    {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  ).then((res) => res.json())
  return packages
}
