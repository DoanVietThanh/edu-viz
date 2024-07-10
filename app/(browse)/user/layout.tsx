"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { studentNavlinks, tutorNavlinks } from "@/constants/account-navlink"
import { useAuthContext } from "@/context/auth-provider"

import { cn } from "@/lib/utils"

export default function UserPageLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname()
  const { user, role, isLoadingAuth } = useAuthContext()
  const navLinks = role == "Student" ? studentNavlinks : tutorNavlinks

  if (!user || isLoadingAuth) {
    return null
  }

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-1/6 flex-col gap-4 px-6 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium",
              pathname === link.href
                ? "bg-[#6B39FF] text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            {link.icons}
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex-1 bg-[#F8F8F8] p-4">{children}</div>
    </div>
  )
}
