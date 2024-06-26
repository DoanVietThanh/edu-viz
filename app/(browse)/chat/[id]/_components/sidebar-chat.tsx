import { Hubs } from '@/actions/chat/get-hubs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { AvatarImage } from '@radix-ui/react-avatar'

type Props = {
  activeHubId: string
  hubs: Hubs
}

const SidebarChat = ({ activeHubId, hubs }: Props) => {
  return (
    <div className='w-72 border-r-2 border-slate-200 bg-white flex flex-col overflow-y-auto h-screen pb-20'>
      <div className='mb-4 p-2 h-[40px]'>
        <Input placeholder='Search user' />
      </div>

      <div className='flex-1 flex flex-col '>
        {Array.from({ length: 30 }).map((i, index) => (
          <div key={index} className='flex items-center gap-4 border px-4 py-2 hover:bg-slate-200 cursor-pointer'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>ThanhDoan</p>
              <p className='text-sm text-foreground text-ellipsis line-clamp-1'>Hello world my name is Thanh</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarChat
