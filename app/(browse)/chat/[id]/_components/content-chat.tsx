import React from 'react'

type Props = {
  activeHubId: string
}

const ContentChat = async ({ activeHubId }: Props) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  console.log({ activeHubId })

  return <div className='flex-1 bg-[#F5F7F8] p-4'>Content</div>
}

export default ContentChat
