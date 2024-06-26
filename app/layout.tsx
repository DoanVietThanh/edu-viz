import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
  children: ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='flex flex-col h-screen'>
            <Header />
            <div className='flex-1 flex flex-col'>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
