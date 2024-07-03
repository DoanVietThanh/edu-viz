import { auth } from '@clerk/nextjs/server'
import React from 'react'

import SidebarChat from './_components/sidebar-chat'
import SocketProvider from './_components/socket-provider'

type Props = {
  children: React.ReactNode
}

function ChatLayout({ children }: Props) {
  auth().protect()
  const { userId } = auth()

  return (
    <SocketProvider clerkId={userId!}>
      <div className='flex h-full overflow-hidden'>
        <SidebarChat />

        <div className='flex flex-1'>{children}</div>
      </div>
    </SocketProvider>
  )
}

export default ChatLayout
