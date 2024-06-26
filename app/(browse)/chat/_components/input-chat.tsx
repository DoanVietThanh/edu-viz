'use client'

import { Image as ImageIcon, PlusCircle, ThumbsUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Textarea } from '@/components/ui/textarea'

const InputChat = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleInput = () => {
    if (!textAreaRef.current) return
    const heightLimit = 140
    textAreaRef.current.style.height = '40px'
    textAreaRef.current.style.height = Math.min(textAreaRef.current.scrollHeight, heightLimit) + 'px'
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey) return

    console.log('Enter on input')
    e.preventDefault() // Prevent the default action (adding a newline)
    setValue('')

    //TODO:submit message
  }

  return (
    <div className='flex items-center gap-4 bg-white p-4'>
      <PlusCircle className='cursor-pointer ' />
      <ImageIcon className='cursor-pointer ' />
      <Textarea
        style={{ height: '40px' }}
        value={value}
        onChange={handleChange}
        onInput={handleInput}
        onKeyDown={handleOnKeyDown}
        ref={textAreaRef}
        placeholder='Message'
        className='w-full flex-1'
      />
      <ThumbsUp className='cursor-pointer ' color='blue' />
    </div>
  )
}

export default InputChat
