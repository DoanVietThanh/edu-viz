import HubItem, { HubItemSkeleton } from './hub-item'
import { getHubs } from '@/actions/chat/get-hubs'
import React from 'react'

import { Input } from '@/components/ui/input'

async function SidebarChat() {
  const hubs = await getHubs()

  return (
    <div className='flex h-screen w-[360px] flex-col overflow-y-auto border-r-2 border-slate-200 bg-white pb-20'>
      <div className='mb-4 h-[40px] p-2'>
        <Input placeholder='Search user' />
      </div>

      <div className='flex flex-1 flex-col '>
        {hubs.map((hub) => (
          <HubItem
            key={hub.id}
            currentUser={hub.currentUser}
            id={hub.id}
            lastMessage={hub.lastMessage}
            otherUser={hub.otherUser}
          />
        ))}
      </div>
    </div>
  )
}

export default SidebarChat

export function SidebarChatSkeleton() {
  return (
    <div className='flex h-screen w-[360px] flex-col overflow-y-auto border-r-2 border-slate-200 bg-white pb-20'>
      <div className='mb-4 h-[40px] p-2'>
        <Input placeholder='Search user' />
      </div>

      <div className='flex flex-1 flex-col '>
        <HubItemSkeleton />
        <HubItemSkeleton />
        <HubItemSkeleton />
        <HubItemSkeleton />
      </div>
    </div>
  )
}
