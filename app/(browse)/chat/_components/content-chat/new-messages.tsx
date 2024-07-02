'use client'

import MessagesGenerator from './messages-generator'
import { MessageDetail } from '@/actions/chat/get-messages'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'

import { useSocket } from '../socket-provider'

type Props = {
  otherUser: User
}

function NewMessages({ otherUser }: Props) {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<MessageDetail[]>([])

  useEffect(() => {
    if (!socket) return

    const handleMessage = (msg: MessageDetail) => {
      setMessages((prev) => [msg, ...prev])
    }

    socket.on('chatMessage', handleMessage)

    return () => {
      socket.off('chatMessage', handleMessage)
    }
  }, [socket])

  return (
    <>
      <MessagesGenerator messages={messages} otherUser={otherUser} />
    </>
  )
}

export default NewMessages
