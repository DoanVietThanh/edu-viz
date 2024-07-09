'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { studentNavlinks, tutorNavlinks } from '@/constants/account-navlink'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/context/auth-provider'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const Header = () => {
  const { user, isLoadingAuth, role } = useAuthContext()
  const router = useRouter()
  console.log({ user, isLoadingAuth, role })

  const navLinks = role == 'Student' ? studentNavlinks : tutorNavlinks

  return (
    <div className='fixed z-50 flex w-full items-center justify-between gap-4 border bg-white p-4 font-semibold shadow-lg'>
      <div className='flex items-center gap-8'>
        <Link href='/home'>
          <Image
            src='/assets/logo.png'
            alt='logo'
            width={40}
            height={40}
            className='rounded-xl transition-all duration-300 ease-in-out hover:scale-110'
          />
        </Link>
        <div className='text-[#7A37FF]'>Trang chủ</div>
        <div>Tất cả dịch vụ</div>
        <Button asChild variant={'ghost'}>
          <Link href='/chat/667ac5146a52284ec61b99e2' className='flex items-center font-semibold text-md'>
            <MessageCircle size={20} className='mr-2' /> Chat
          </Link>
        </Button>
      </div>

      <SignedIn>
        <div className='flex items-center gap-4'>
          <DropdownMenu>
            <Button asChild variant={'ghost'} className='font-semibold flex gap-2 text-lg items-center'>
              <DropdownMenuTrigger>My Application</DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.map((link, index) => (
                <DropdownMenuItem key={index} onClick={() => router.push(link.href)} className='cursor-pointer'>
                  {link.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <UserButton />
        </div>
      </SignedIn>

      <SignedOut>
        <div className='flex items-center gap-4'>
          <Input type='text' placeholder='Search' />
          <Button
            className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white'
            asChild
          >
            <Link href='/sign-in'>Đăng nhập</Link>
          </Button>
        </div>
      </SignedOut>
    </div>
  )
}

export default Header
