"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { adminNavlinks } from "@/constants/account-navlink"

import { cn } from "@/lib/utils"

const SidebarAdmin = () => {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-1/6 flex-col gap-4 px-6 py-4">
      <Link
        href="/home"
        className="flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-105"
      >
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <div className="text-2xl font-semibold text-[#7A37FF]">EduViz</div>
      </Link>
      {adminNavlinks.map((link) => (
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
  )
}

export default SidebarAdmin
