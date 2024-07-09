'use client'

import { accountNavlinks } from '@/constants/account-navlink'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function UserPageLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname()

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col gap-4 w-1/6 h-full px-6 py-4'>
        {accountNavlinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium',
              pathname === link.href
                ? 'bg-[#6B39FF] text-white'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            )}
          >
            {link.icons}
            {link.name}
          </Link>
        ))}
      </div>
      <div className='bg-[#F8F8F8] flex-1 p-4'>{children}</div>
    </div>
  )
}
