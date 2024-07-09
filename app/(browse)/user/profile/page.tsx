'use client'

import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { useAuthContext } from '@/context/auth-provider'

const UserProfilePage = () => {
  const { user } = useAuthContext()
  console.log('🚀 ~ UserProfilePage ~ user:', user)
  return (
    <div className='container '>
      <h1 className='text-3xl rounded-xl w-max mb-8'>Sửa hồ sơ</h1>
      <div className='flex gap-8 bg-white p-8 rounded-lg shadow-lg'>
        <div>
          <Image
            src={user?.avatar || '/assets/avatar-tutor.png'}
            width={160}
            height={160}
            alt='Avatar'
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl font-serif '>{user?.fullName}</p>
          <p className='flex items-center gap-2 font-semibold'>
            <Mail /> {user?.email}
          </p>
          <div className='flex items-center text-coin gap-4'>
            <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
            {user?.balance}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
