"use client"

import { useEffect, useRef, useState } from "react"
import { type User } from "@prisma/client"
import { Image as ImageIcon, PlusCircle, ThumbsUp } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"

import { useSocket, type TSendMessage } from "./socket-provider"

type Props = {
  currentUser: User
  otherUser: User
}

const InputChat = ({ currentUser, otherUser }: Props) => {
  const { socket } = useSocket()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState("")

  useEffect(() => {
    const fitTextBox = () => {
      if (!textAreaRef.current) return
      const heightLimit = 140
      textAreaRef.current.style.height = "40px"
      textAreaRef.current.style.height =
        Math.min(textAreaRef.current.scrollHeight, heightLimit) + "px"
    }

    fitTextBox()
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter" || e.shiftKey) return

    e.preventDefault() // Prevent the default action (adding a newline)
    setValue("")

    if (!socket || !value) return
    const msg: TSendMessage = {
      receiverId: otherUser.id,
      senderId: currentUser.id,
      type: "Text",
      content: value,
    }
    socket.emit("chatMessage", msg)
  }

  return (
    <div className="flex items-center gap-4 border-t bg-white p-4">
      <PlusCircle className="cursor-pointer" />
      <ImageIcon className="cursor-pointer" />
      <Textarea
        style={{ height: "40px" }}
        value={value}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        ref={textAreaRef}
        placeholder="Message"
        className="w-full flex-1"
      />
      <ThumbsUp className="cursor-pointer" color="blue" />
    </div>
  )
}

export default InputChat

export function InputChatSkeleton() {
  return (
    <div className="flex items-center gap-4 border-t bg-white p-4">
      <Skeleton className="size-6 rounded-full" />
      <Skeleton className="size-6 rounded-full" />
      <Skeleton className="h-10 w-full flex-1" />
      <Skeleton className="size-6 rounded-full" />
    </div>
  )
}
