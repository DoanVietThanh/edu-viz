"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { studentNavlinks, tutorNavlinks } from "@/constants/account-navlink"
import { useAuthContext } from "@/context/auth-provider"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { MessageCircle } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Header = () => {
  const { user, isLoadingAuth, role } = useAuthContext()
  const router = useRouter()
  console.log({ user, isLoadingAuth, role })

  const navLinks = role == "Student" ? studentNavlinks : tutorNavlinks

  return (
    <div className="fixed z-50 flex w-full items-center justify-between gap-4 border bg-white p-4 font-semibold shadow-lg">
      <div className="flex items-center gap-8">
        <Link href="/home" className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-xl transition-all duration-300 ease-in-out hover:scale-110"
          />
          <div className="text-[#7A37FF]">Home Page</div>
        </Link>
        <Button asChild variant={"ghost"}>
          <Link href="/chat" className="flex items-center font-semibold">
            <MessageCircle size={20} className="mr-2" /> Chat
          </Link>
        </Button>
      </div>

      <SignedIn>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <Button
              asChild
              variant={"ghost"}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <DropdownMenuTrigger>My Application</DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.map((link, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => router.push(link.href)}
                  className="cursor-pointer"
                >
                  {link.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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

export default Header
