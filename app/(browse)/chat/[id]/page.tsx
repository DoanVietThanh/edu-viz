import React from 'react'
import { redirect } from 'next/navigation'

import ContentChat from './_components/content-chat'
import HeaderChat from './_components/header-chat'
import InfoMessage from './_components/info-message'
import InputChat from './_components/input-chat'
import SidebarChat from './_components/sidebar-chat'
import NotFoundPage from './not-found'
import { getHubs } from '@/actions/chat/get-hubs'

type ChatPageProps = {
  params: {
    id: string
  }
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const hubId = params.id
  const hubs = await getHubs()

  if (hubs.length == 0) return <NotFoundPage />

  const validHubId = hubs.map((hub) => hub.id).includes(hubId)

  if (!validHubId) {
    return redirect(`/chat/${hubs[0].id}`)
  }

  return (
    <div className='flex bg-red-200 overflow-hidden h-full'>
      <SidebarChat activeHubId={hubId} hubs={hubs} />
      <div className='flex-1 flex'>
        <div className='flex-1 flex flex-col'>
          <HeaderChat />
          <ContentChat />
          <InputChat />
        </div>
        <InfoMessage />
      </div>
    </div>
  )
}

export default ChatPage
