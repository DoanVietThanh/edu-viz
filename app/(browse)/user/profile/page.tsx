"use client"

import React from "react"
import Image from "next/image"
import { useAuthContext } from "@/context/auth-provider"
import { Mail } from "lucide-react"

const UserProfilePage = () => {
  const { user } = useAuthContext()
  return (
    <div className="container">
      <h1 className="mb-8 w-max font-serif text-3xl font-semibold">
        My profile
      </h1>
      <div className="flex gap-8 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <Image
            src={user?.avatar || "/assets/avatar-tutor.png"}
            width={160}
            height={160}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-serif text-3xl">{user?.fullName}</p>
          <p className="flex items-center gap-2 font-semibold">
            <Mail /> {user?.email}
          </p>
          <div className="flex items-center gap-4 text-xl font-semibold text-coin">
            <Image
              src="/icons/coin.png"
              width={30}
              height={30}
              className="object-cover"
              alt="coin"
            />
            {user?.balance.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
