"use client"

import Link from "next/link"
import { useAuthContext } from "@/context/auth-provider"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const HeaderAdmin = () => {
  const { user, isLoadingAuth, role } = useAuthContext()
  console.log({ user, isLoadingAuth, role })

  return (
    <div className="flex w-full items-center justify-between gap-4 border bg-white p-4 font-semibold shadow-sm">
      <div className="flex items-center gap-8">{new Date().toDateString()}</div>
      <SignedIn>
        <div className="flex items-center gap-4">
          <h1>Admin</h1>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search" />
          <Button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white"
            asChild
          >
            <Link href="/sign-in">Đăng nhập</Link>
          </Button>
        </div>
      </SignedOut>
    </div>
  )
}

export default HeaderAdmin
