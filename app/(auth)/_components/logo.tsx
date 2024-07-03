import React from "react"
import { Poppins } from "next/font/google"
import Image from "next/image"

import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image
        src="/assets/logo.png"
        alt="twitch"
        height={80}
        width={80}
        className="rounded-3xl object-cover"
      />

      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">
          <strong className="text-primary">EduViz</strong>
        </p>
        <p className="text-sm text-muted-foreground">Let&apos;s learn</p>
      </div>
    </div>
  )
}

export default Logo
