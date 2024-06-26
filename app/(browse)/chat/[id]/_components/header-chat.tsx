import { User } from '@prisma/client'
import { ArrowBigRight, Phone, VideoIcon } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  otherUser: User
}

const HeaderChat = ({ otherUser }: Props) => {
  return (
    <div className='flex justify-between bg-white p-4'>
      <div className='flex gap-4'>
        <Avatar>
          <AvatarImage src={otherUser.avatar} alt='@shadcn' />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center gap-y-1'>
          <Link href='/' className='font-semibold leading-none'>
            {otherUser.fullName}
          </Link>
          {!otherUser.tutor?.isAvailable && (
            <div className='line-clamp-1 flex items-center gap-2 text-ellipsis text-sm leading-none text-foreground'>
              <div className='size-2 rounded-full bg-green-500'></div> Available
            </div>
          )}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Phone className='cursor-pointer hover:bg-slate-50' />
        <VideoIcon className='cursor-pointer hover:bg-slate-50' />
        <ArrowBigRight className='cursor-pointer hover:bg-slate-50' />
      </div>
    </div>
  )
}

export default HeaderChat
