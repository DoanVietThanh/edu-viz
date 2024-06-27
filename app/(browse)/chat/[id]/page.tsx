import React, { Suspense } from 'react'

import ContentChat, { ContentChatSkeleton } from '../_components/content-chat'

import HeaderChat, { HeaderChatSkeleton } from '../_components/header-chat'
import InputChat from '../_components/input-chat'

type ChatPageProps = {
  params: {
    id: string
  }
}

function ChatPage({ params }: ChatPageProps) {
  const hubId = params.id

  return (
    <div className='flex size-full flex-col'>
      <Suspense fallback={<HeaderChatSkeleton />}>
        <HeaderChat hubId={hubId} />
      </Suspense>

      <Suspense fallback={<ContentChatSkeleton />}>
        <ContentChat activeHubId={hubId} />
      </Suspense>

      <InputChat />
    </div>
  )
}

export default ChatPage
