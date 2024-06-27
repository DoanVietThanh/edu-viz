'use client'

import MessageGenerator from './message-generator'
import { Message, User } from '@prisma/client'
import React, { useEffect, useState } from 'react'

import { useSocket } from '../socket-provider'

type Props = {
  initLastMessageOwner: string | null
  otherUser: User
}

function NewMessages({ initLastMessageOwner, otherUser }: Props) {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!socket) return

    const handleMessage = (msg: Message) => {
      setMessages((prev) => [msg, ...prev])
    }

    socket.on('chatMessage', handleMessage)

    return () => {
      socket.off('chatMessage', handleMessage)
    }
  }, [socket])

  return (
    <>
      <MessageGenerator messages={messages} otherUser={otherUser} />
    </>
  )
}

export default NewMessages
