import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'EduViz',
  description: 'Generated by Thanh - Van'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary text-gradient-foreground !shadow-none'
        }
      }}
    >
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
