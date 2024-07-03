import React from "react"
import Image from "next/image"
import { type MessageDetail } from "@/actions/chat/get-messages"
import { type User } from "@prisma/client"

import { cn, formatMessageTime } from "@/lib/utils"

import ApproveMessage from "./approve-message"
import CompleteMessage from "./complete-message"
import OrderMessage from "./order-message"
import RejectMessage from "./reject-message"

type Props = {
  otherUser: User
  messages: MessageDetail[]
  timeLastBeforeOuterMessage?: number
}

function MessagesGenerator({
  otherUser,
  messages,
  timeLastBeforeOuterMessage,
}: Props) {
  return (
    <>
      {messages.map((message, i) => {
        const timeCurrentMessage = new Date(message.createdAt).getTime()
        let isDisplayTime = true

        if (i === messages.length - 1) {
          if (timeLastBeforeOuterMessage) {
            isDisplayTime &&=
              timeCurrentMessage - timeLastBeforeOuterMessage > 15 * 60 * 1000
          }
        } else {
          const timeLastBeforeMessage = new Date(
            messages[i + 1].createdAt
          ).getTime()
          isDisplayTime &&=
            timeCurrentMessage - timeLastBeforeMessage > 15 * 60 * 1000
        }

        if (message.senderId !== otherUser.id)
          return (
            <>
              <div key={message.id} className="my-1 w-fit max-w-[50%] self-end">
                <MessageContent otherUser={otherUser} message={message} />
              </div>
              {isDisplayTime && (
                <div className="my-4 w-full text-center text-xs font-bold">
                  {formatMessageTime(timeCurrentMessage)}
                </div>
              )}
            </>
          )

        const nextMessage = i < messages.length - 1 ? messages[i + 1] : null
        const isLastMessageInSequence =
          i == messages.length - 1 || otherUser.id !== nextMessage?.senderId

        return (
          <>
            <div key={message.id} className="my-1 flex gap-2">
              {isLastMessageInSequence ? (
                <div>
                  <Image
                    alt="other-user-avatar"
                    src={otherUser.avatar}
                    className="mt-1 rounded-full object-cover"
                    height={36}
                    width={36}
                  />
                </div>
              ) : (
                <div className="size-9"></div>
              )}
              <div className="w-fit max-w-[50%]">
                <MessageContent otherUser={otherUser} message={message} />
              </div>
            </div>
            {isDisplayTime && (
              <div className="my-4 w-full text-center text-xs font-bold">
                {formatMessageTime(timeCurrentMessage)}
              </div>
            )}
          </>
        )
      })}
    </>
  )
}

export default MessagesGenerator

function MessageContent({
  message,
  otherUser,
}: {
  message: MessageDetail
  otherUser: User
}) {
  if (message.type === "Text") {
    return (
      <div
        className={cn(
          "rounded-lg px-3 py-2",
          otherUser.id !== message.senderId
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {message.content}
      </div>
    )
  }

  if (message.type === "Video") {
    return <div>video</div>
  }

  if (message.type === "Image") {
    return <div>image</div>
  }

  if (message.type === "ReservationOrder") {
    return <OrderMessage message={message} otherUser={otherUser} />
  }

  if (message.type === "ReservationReject") {
    return <RejectMessage message={message} otherUser={otherUser} />
  }

  if (message.type === "ReservationApprove") {
    return <ApproveMessage message={message} otherUser={otherUser} />
  }

  if (message.type === "ReservationComplete") {
    return <CompleteMessage message={message} otherUser={otherUser} />
  }

  return null
}
