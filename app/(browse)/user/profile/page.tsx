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
      <h1 className='text-3xl font-semibold font-serif w-max mb-8'>My profile</h1>
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
          <div className='flex items-center text-coin gap-4 text-xl font-semibold'>
            <Image src='/icons/coin.png' width={30} height={30} className='object-cover' alt='coin' />
            {user?.balance.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
