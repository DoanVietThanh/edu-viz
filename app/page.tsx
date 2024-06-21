import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <Button asChild>
        <Link href='/home'>Welcome to EduViz </Link>
      </Button>
    </div>
  )
}
