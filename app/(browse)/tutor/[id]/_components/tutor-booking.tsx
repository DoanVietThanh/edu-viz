import { getHubId } from '@/actions/chat/get-hubId'
import { bookReservation } from '@/actions/reservation/book-reservation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

type TutorBookingProps = {
  tutorInfo: any
  selectedPackage: any
}

const TutorBooking = ({ tutorInfo, selectedPackage }: TutorBookingProps) => {
  const router = useRouter()
  const [duration, setDuration] = useState<number>(1)
  const [openBooking, setOpenBooking] = useState<boolean>(false)

  const [isBooking, startBooking] = useTransition()
  const [isNavigateChatting, startNavigateChatting] = useTransition()

  const handleSubmit = () => {
    if (isBooking) return
    startBooking(async () => {
      await bookReservation(selectedPackage.id, duration)
        .then((res) => {
          toast.success(res.message || 'Đặt đơn hàng thành công')
          setOpenBooking(false)
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  const navigateChat = () => {
    if (isNavigateChatting) return
    startNavigateChatting(() => {
      getHubId(tutorInfo.id)
        .then((hubId) => {
          router.push(`/chat/${hubId}`)
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  const handleCancel = () => {
    setOpenBooking(false)
    setDuration(1)
  }

  const handleChangeHour = (e: any) => {
    const value = e.target.value
    if (parseInt(value) > 0 && parseInt(value) <= 5) {
      setDuration(value)
    }
    return
  }

  return (
    <div className='flex gap-4'>
      <Sheet open={openBooking} onOpenChange={setOpenBooking}>
        <Button variant='default' asChild className='flex-1'>
          <SheetTrigger>Đặt đơn</SheetTrigger>
        </Button>
        <SheetContent className='min-w-max'>
          <SheetHeader>
            <SheetTitle>Xác nhận đơn hàng</SheetTitle>
            <SheetDescription>Date: {new Date().toLocaleString()}</SheetDescription>
          </SheetHeader>
          <div className='my-2'>
            <div className='flex items-center gap-4 overflow-hidden rounded-lg p-4 shadow-lg'>
              <Image
                src={tutorInfo.avatar || `/assets/avatar-tutor.png`}
                alt='Avatar'
                width={40}
                height={40}
                className='rounded-md'
              />
              <p className='font-bold'>😎 {tutorInfo.fullName} 😎</p>
            </div>
            <div className='flex flex-col gap-4 bg-slate-200 p-4 mt-6 rounded-xl'>
              <div className='flex justify-between items-center bg-white py-2 px-4 rounded-xl'>
                <div>Dịch vụ</div>
                <div className='font-serif font-semibold'>{selectedPackage.subject.name}</div>
              </div>
              <div className='flex justify-between items-center bg-white py-2 px-4 rounded-xl'>
                <div>Đơn giá</div>
                <div className='flex gap-2 items-center text-coin'>
                  <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
                  {selectedPackage.pricePerHour}/hour
                </div>
              </div>
              <div className='flex justify-between items-center bg-white py-2 px-4 rounded-xl'>
                <div>Số giờ</div>
                <div>
                  <Input
                    type='number'
                    min={1}
                    max={5}
                    className='w-20'
                    value={duration}
                    onChange={(e) => handleChangeHour(e)}
                  />
                </div>
              </div>
            </div>

            <h1 className='text-center font-serif text-2xl font-semibold mt-6'>Total</h1>
            <div className='flex flex-col gap-4 bg-slate-200 p-4 rounded-xl'>
              <div className='flex justify-between items-center bg-white py-2 px-4 rounded-xl'>
                <div>Tổng giá trị</div>
                <div className='flex gap-2 items-center text-coin'>
                  <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
                  {(selectedPackage.pricePerHour * duration).toLocaleString()}
                </div>
              </div>
              <div className='flex justify-between items-center bg-white py-2 px-4 rounded-xl'>
                <div>Tổng số giờ</div>
                <div>{duration}</div>
              </div>
            </div>
          </div>

          <SheetFooter className='mt-6'>
            <Button variant='secondary' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='default' onClick={handleSubmit} disabled={isBooking}>
              Submit
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Button variant='secondary' onClick={navigateChat} disabled={isNavigateChatting} className='flex-1 font-semibold'>
        Chat
      </Button>
    </div>
  )
}

export default TutorBooking
