import React from 'react'

import { ContentChatSkeleton } from '../_components/content-chat'

import { HeaderChatSkeleton } from '../_components/header-chat'
import { InputChatSkeleton } from '../_components/input-chat'

function LoadingPage() {
  return (
    <div className='flex size-full flex-col'>
      <HeaderChatSkeleton />
      <ContentChatSkeleton />
      <InputChatSkeleton />
    </div>
  )
}

export default LoadingPage
