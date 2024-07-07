import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <Button asChild variant={'link'}>
        <Link href='/home'>Welcome to EduViz</Link>
      </Button>
    </div>
  )
}
