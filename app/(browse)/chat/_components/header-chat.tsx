import { getHub } from '@/actions/chat/get-hub'
import { ArrowBigRight, Phone, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  hubId: string
}

const HeaderChat = async ({ hubId }: Props) => {
  const hub = await getHub(hubId)

  if (!hub) {
    return notFound()
  }
  console.log({ hub })

  return (
    <div className='flex justify-between border-b p-4'>
      <div className='flex gap-4'>
        <Avatar>
          <AvatarImage src={hub.otherUser.avatar} alt='@shadcn' />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center gap-y-1'>
          <Link href='/' className='font-semibold leading-none'>
            {hub.otherUser.fullName}
          </Link>
          {!hub.otherUser.tutor?.isAvailable && (
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

export function HeaderChatSkeleton() {
  return (
    <div className='flex justify-between border-b bg-white p-4'>
      <div className='flex gap-4'>
        <Skeleton className='size-10 rounded-full' />
        <div className='flex flex-col justify-center gap-y-1'>
          <Skeleton className='h-4 w-40' />
          <Skeleton className='h-3 w-40' />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Skeleton className='size-6 rounded-full' />
        <Skeleton className='size-6 rounded-full' />
        <Skeleton className='size-6 rounded-full' />
      </div>
    </div>
  )
}
