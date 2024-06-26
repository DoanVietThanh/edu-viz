import { Image as ImageIcon, PlusCircle, ThumbsUp } from 'lucide-react'

import { Input } from '@/components/ui/input'

const InputChat = () => {
  return (
    <div className='flex items-center gap-4 bg-white p-4'>
      <PlusCircle className='cursor-pointer ' />
      <ImageIcon className='cursor-pointer ' />
      <Input placeholder='Message' className='w-full flex-1' />
      <ThumbsUp className='cursor-pointer ' color='blue' />
    </div>
  )
}

export default InputChat
