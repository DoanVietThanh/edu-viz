import { Input } from '@/components/ui/input'
import { Image as ImageIcon, PlusCircle, ThumbsUp } from 'lucide-react'

const InputChat = () => {
  return (
    <div className='p-4 bg-white flex items-center gap-4'>
      <PlusCircle className='cursor-pointer ' />
      <ImageIcon className='cursor-pointer ' />
      <Input placeholder='Message' className='flex-1 w-full' />
      <ThumbsUp className='cursor-pointer ' color='blue' />
    </div>
  )
}

export default InputChat
