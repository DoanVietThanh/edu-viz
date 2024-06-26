import { getHubs } from '@/actions/chat/get-hubs'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

import ContentChat from './_components/content-chat'

import HeaderChat from './_components/header-chat'
import InfoMessage from './_components/info-message'
import InputChat from './_components/input-chat'
import SidebarChat from './_components/sidebar-chat'

import NotFoundPage from '../not-found'

type ChatPageProps = {
  params: {
    id: string
  }
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const hubId = params.id
  const hubs = await getHubs()

  if (hubs.length == 0) return <NotFoundPage />

  const activeHub = hubs.find((h) => h.id === hubId)

  if (!activeHub) {
    return redirect(`/chat/${hubs[0].id}`)
  }

  return (
    <div className='flex h-full overflow-hidden bg-red-200'>
      <SidebarChat activeHubId={hubId} hubs={hubs} />
      <div className='flex flex-1'>
        <div className='flex flex-1 flex-col'>
          <HeaderChat otherUser={activeHub.otherUser} />
          <Suspense fallback={<div className='text-5xl'>Loading Chat Content...</div>}>
            <ContentChat activeHubId={hubId} />
          </Suspense>
          <InputChat />
        </div>
        <InfoMessage />
      </div>
    </div>
  )
}

export default ChatPage
