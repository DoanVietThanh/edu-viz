import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowBigRight, Circle, Phone, VideoIcon } from 'lucide-react'

const HeaderChat = () => {
  return (
    <div className='p-4 bg-white flex justify-between'>
      <div className='flex gap-4'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <Link href='/' className='text-md font-semibold'>
            ThanhDoan
          </Link>
          <p className='text-sm text-foreground text-ellipsis line-clamp-1 flex gap-2 items-center'>
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
