import React from 'react'

import ContentChat from './_components/ContentChat'
import HeaderChat from './_components/HeaderChat'
import InfoMessage from './_components/InfoMessage'
import InputChat from './_components/InputChat'
import SidebarChat from './_components/SidebarChat'

type ChatPageProps = {
  params: {
    id: string
  }
}

const ChatPage = ({ params }: ChatPageProps) => {
  return (
    <div className='flex h-full bg-red-200 overflow-hidden'>
      <SidebarChat />
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
