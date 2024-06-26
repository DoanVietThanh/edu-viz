import NotFoundPage from './not-found'
import { getHubs } from '@/actions/chat/get-hubs'
import { redirect } from 'next/navigation'

const ChatPage = async () => {
  const hubs = await getHubs()

  if (hubs.length == 0) return <NotFoundPage />

  return redirect(`/chat/${hubs[0].id}`)
}

export default ChatPage
