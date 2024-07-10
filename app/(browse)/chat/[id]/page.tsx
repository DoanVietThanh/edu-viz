import React, { Suspense } from "react"
import { notFound } from "next/navigation"

import { getHub } from "@/actions/chat/get-hub"

import ContentChat, { ContentChatSkeleton } from "../_components/content-chat"
import HeaderChat from "../_components/header-chat"
import InputChat from "../_components/input-chat"

type ChatPageProps = {
  params: {
    id: string
  }
}

async function ChatPage({ params }: ChatPageProps) {
  const hub = await getHub(params.id)

  if (!hub) {
    return notFound()
  }

  const { currentUser, otherUser } = hub

  return (
    <div className="flex size-full flex-col">
      <HeaderChat otherUser={otherUser} />

      <Suspense fallback={<ContentChatSkeleton />}>
        <ContentChat otherUser={otherUser} activeHubId={hub.id} />
      </Suspense>

      <InputChat otherUser={otherUser} currentUser={currentUser} />
    </div>
  )
}

export default ChatPage
