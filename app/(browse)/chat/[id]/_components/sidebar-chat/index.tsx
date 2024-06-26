import HubItem from './hub-item'
import { Hubs } from '@/actions/chat/get-hubs'

import { Input } from '@/components/ui/input'

type Props = {
  activeHubId: string
  hubs: Hubs
}

const SidebarChat = ({ activeHubId, hubs }: Props) => {
  return (
    <div className='flex h-screen w-[360px] flex-col overflow-y-auto border-r-2 border-slate-200 bg-white pb-20'>
      <div className='mb-4 h-[40px] p-2'>
        <Input placeholder='Search user' />
      </div>

      <div className='flex flex-1 flex-col '>
        {hubs.map((hub) => (
          <HubItem
            key={hub.id}
            active={activeHubId === hub.id}
            currentUser={hub.currentUser}
            hubId={hub.id}
            lastMessage={hub.lastMessage}
            otherUser={hub.otherUser}
          />
        ))}
      </div>
    </div>
  )
}

export default SidebarChat
