import { Button } from './ui/button'
import { Input } from './ui/input'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

const Header = async () => {
  return (
    <div className='fixed flex w-full items-center justify-between gap-4 border bg-white p-4 font-semibold shadow-lg'>
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
      </div>

      <SignedIn>
        <UserButton />
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
