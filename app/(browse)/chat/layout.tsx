import React, { Suspense } from 'react'

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
