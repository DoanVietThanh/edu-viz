import { ArrowBigRight, Circle, Phone, VideoIcon } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const HeaderChat = () => {
  return (
    <div className='flex justify-between bg-white p-4'>
      <div className='flex gap-4'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <Link href='/' className='font-semibold'>
            ThanhDoan
          </Link>
          <p className='line-clamp-1 flex items-center gap-2 text-ellipsis text-sm text-foreground'>
            <Circle color='green' size={10} fill='green' /> Active
          </p>
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
