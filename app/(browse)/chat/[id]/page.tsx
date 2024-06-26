import { getHubs } from '@/actions/chat/get-hubs'
import { Loader2 } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

import ContentChat from '../_components/content-chat'

import HeaderChat from '../_components/header-chat'
import InfoMessage from '../_components/info-message'
import InputChat from '../_components/input-chat'
import SidebarChat from '../_components/sidebar-chat'

import NotFoundPage from '../not-found'

type ChatPageProps = {
  params: {
    id: string
  }
}

function ChatPage({ params }: ChatPageProps) {
  const hubId = params.id

  return (
    <div className='flex size-full flex-col'>
      <Suspense fallback='Loading header chat....'>
        <HeaderChat hubId={hubId} />
      </Suspense>

      <Suspense
        fallback={
          <div className='flex flex-1 items-center justify-center p-4'>
            <Loader2 className='size-12 animate-spin' />
          </div>
        }
      >
        <ContentChat activeHubId={hubId} />
      </Suspense>
      <InputChat />
    </div>
  )
}

export default ChatPage
