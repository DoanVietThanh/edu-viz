import "./globals.css"

import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EduViz",
  description: "Generated by Thanh - Van",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            {children}
            <Toaster position="top-right" />
          </>
        </body>
      </html>
    </Providers>
  )
}
