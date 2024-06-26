import { Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'

import ContentChat from './_components/content-chat'

import HeaderChat from './_components/header-chat'
import InfoMessage from './_components/info-message'
import InputChat from './_components/input-chat'
import SidebarChat, { SidebarChatSkeleton } from './_components/sidebar-chat'

type Props = {
  children: React.ReactNode
}

function ChatLayout({ children }: Props) {
  return (
    <div className='flex h-full overflow-hidden'>
      <Suspense fallback={<SidebarChatSkeleton />}>
        <SidebarChat />
      </Suspense>
      <div className='flex flex-1'>{children}</div>
    </div>
  )
}

export default ChatLayout
