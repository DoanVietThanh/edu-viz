import Image from 'next/image'
import Link from 'next/link'

import { Input } from './ui/input'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

const Header = async () => {
  const user = await currentUser()
  console.log('🚀 ~ Header ~ user:', user)
  return (
    <div className='flex justify-between items-center font-semibold gap-4 border p-4 shadow-lg'>
      <div className='flex items-center gap-8'>
        <Link href='/home'>
          <Image
            src='/assets/logo.png'
            alt='logo'
            width={40}
            height={40}
            className='rounded-xl hover:scale-110 transition-all ease-in-out duration-300'
          />
        </Link>
        <div className='text-[#7A37FF]'>Trang chủ</div>
        <div>Tất cả dịch vụ</div>
      </div>

      <div className='flex items-center gap-4'>
        <Input type='text' placeholder='Search' />
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className='flex items-center'>
              <p className='text-[#7A37FF] mr-4 flex whitespace-nowrap'>{`${user?.firstName} ${user?.lastName}`}</p>
              <UserButton />
            </div>
          </SignedIn>
        </header>
        {/* <Button
          onClick={() => router.push('/sign-in')}
          className='text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        >
          Đăng nhập
        </Button> */}
      </div>
    </div>
  )
}

export default Header
