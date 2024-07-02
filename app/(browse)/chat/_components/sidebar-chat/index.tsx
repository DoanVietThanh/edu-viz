'use client'

import HubItem, { HubItemSkeleton } from './hub-item'
import { HubDetail } from '@/actions/chat/get-hub'
import { Message } from '@prisma/client'
import React, { useEffect, useState } from 'react'

import useHubs from '@/hooks/use-hubs'

import { Input } from '@/components/ui/input'

import { useSocket } from '../socket-provider'

function SidebarChat() {
  const { socket } = useSocket()
  const { data: hubs, isLoading } = useHubs()
  const [mapHubs, setMapHubs] = useState<Record<string, HubDetail>>({})

  useEffect(() => {
    if (isLoading || !hubs) return

    setMapHubs((prev) => {
      const cloneMapHubs = structuredClone(prev)
      hubs.forEach((hub) => {
        cloneMapHubs[hub.id] = hub
      })
      return cloneMapHubs
    })
  }, [hubs, isLoading])

  useEffect(() => {
    if (!socket) return

    const handleMessage = (msg: Message) => {
      const hub = hubs?.find((h) => h.id === msg.hubId)
      if (!hub) return

      setMapHubs((prev) => {
        const cloneMapHubs = structuredClone(prev)
        cloneMapHubs[hub.id].lastMessage = msg
        return cloneMapHubs
      })
    }

    socket.on('chatMessage', handleMessage)

    return () => {
      socket.off('chatMessage', handleMessage)
    }
  }, [socket, hubs])

  if (isLoading) return <SidebarChatSkeleton />

  return (
    <div className='flex h-screen w-[360px] flex-col overflow-y-auto border-r-2 border-slate-200 bg-white pb-20'>
      <div className='mb-4 h-[40px] p-2'>
        <Input placeholder='Search user' />
      </div>

      <div className='flex flex-1 flex-col '>
        {Object.values(mapHubs)
          .sort((a, b) => new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime())
          .map((hub) => (
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
