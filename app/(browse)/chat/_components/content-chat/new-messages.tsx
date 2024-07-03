"use client"

import React, { useEffect, useState } from "react"
import { type MessageDetail } from "@/actions/chat/get-messages"
import { type User } from "@prisma/client"

import { useSocket } from "../socket-provider"
import MessagesGenerator from "./messages-generator"

type Props = {
  otherUser: User
  timeLastBeforeOuterMessage: number
}

function NewMessages({ otherUser, timeLastBeforeOuterMessage }: Props) {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<MessageDetail[]>([])

  useEffect(() => {
    if (!socket) return

    const handleMessage = (msg: MessageDetail) => {
      if (
        !["Image", "Video", "Text"].includes(msg.type) &&
        msg.receiverId === otherUser.id
      )
        return
      setMessages((prev) => [msg, ...prev])
    }

    socket.on("chatMessage", handleMessage)

    return () => {
      socket.off("chatMessage", handleMessage)
    }
  }, [socket, otherUser])

  return (
    <>
      <MessagesGenerator
        timeLastBeforeOuterMessage={timeLastBeforeOuterMessage}
        messages={messages}
        otherUser={otherUser}
      />
    </>
  )
}

export default NewMessages
