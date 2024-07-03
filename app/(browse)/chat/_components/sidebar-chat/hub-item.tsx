import React from "react"
import Link from "next/link"
import { type HubDetail } from "@/actions/chat/get-hub"
import moment from "moment"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

type Props = HubDetail

function HubItem({ currentUser, id, lastMessage, otherUser }: Props) {
  let messageContent = lastMessage.senderId === currentUser.id ? "You:" : ""

  switch (lastMessage.type) {
    case "Text": {
      messageContent += ` ${lastMessage.content}`
      break
    }
    case "Image": {
      messageContent += " has sent a image"
      break
    }
    case "Video": {
      messageContent += " has sent a video"
      break
    }
    case "ReservationOrder": {
      messageContent += " has ordered a package"
      break
    }
    case "ReservationApprove": {
      messageContent += " has approved the order"
      break
    }
    case "ReservationReject": {
      messageContent += " has rejected the order"
      break
    }
    case "ReservationComplete": {
      messageContent += " has completed the order"
      break
    }
  }

  return (
    <Link
      href={`/chat/${id}`}
      className={cn(
        "flex cursor-pointer items-center gap-4 border px-4 py-2 hover:bg-slate-200"
        // active && 'bg-slate-200'
      )}
    >
      <div className="relative">
        <Avatar className="size-14">
          <AvatarImage src={otherUser.avatar} alt="@shadcn" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        {otherUser.tutor?.isAvailable && (
          <div className="absolute bottom-px right-px size-4 rounded-full border border-background bg-green-500" />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <p className="line-clamp-1 font-semibold">{otherUser.fullName}</p>
        <div
          className={cn(
            "flex w-full items-center justify-between gap-x-2 text-muted-foreground",
            !lastMessage.isSeen && "font-bold text-foreground"
          )}
        >
          <p className="line-clamp-1 flex-1 text-sm">{messageContent}</p>
          <p className="shrink-0 text-xs">
            {moment(lastMessage.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default HubItem

export function HubItemSkeleton() {
  return (
    <div className="flex cursor-pointer items-center gap-4 border px-4 py-2">
      <Skeleton className="size-14 rounded-full"></Skeleton>

      <div className="flex flex-1 flex-col gap-y-1">
        <Skeleton className="h-6 w-full"></Skeleton>
        <Skeleton className="h-5 w-full"></Skeleton>
      </div>
    </div>
  )
}
