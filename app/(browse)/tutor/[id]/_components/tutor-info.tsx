'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

type TutorInfoProps = {
  tutorInfo: any
  subjectName: string
}
const TutorInfo = ({ tutorInfo, subjectName }: TutorInfoProps) => {
  const packagesTutor = tutorInfo.packages
  const [selectedPackage, setSelectedPackage] = useState(
    () => packagesTutor.filter((item: any) => item.subject.name === subjectName)[0]
  )
  console.log('🚀 ~ TutorInfo ~ selectedPackage:', selectedPackage)

  return (
    <div className='flex flex-col gap-4'>
      <section className='flex justify-between items-center gap-4 p-8 shadow-md border '>
        <div className='flex items-center gap-4'>
          <Image
            src={tutorInfo.avatar || `/assets/avatar-tutor.png`}
            alt='Avatar'
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='flex flex-col'>
            <p>
              <span className='font-bold'>Name</span> {tutorInfo.fullName}
            </p>
            <p>
              <span className='font-bold'>ID</span> {tutorInfo.id}
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button variant='outline'>Chia sẻ</Button>
          <Button variant='default' className=''>
            Theo dõi
          </Button>
        </div>
      </section>

      <section className='flex flex-1 justify-center gap-8 p-8'>
        <div className='overflow-hidden rounded-lg p-4 shadow-lg'>
          <Image
            src={tutorInfo.avatar || `/assets/avatar-tutor.png`}
            alt='Avatar'
            width={400}
            height={400}
            className='rounded-md'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between border bg-white p-4 shadow-md rounded-md'>
          <div>
            <p className='text-3xl font-serif border-b-2'>Kĩ năng</p>
            <div className='flex justify-center'>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true
                }}
                className='w-full max-w-2xl'
              >
                <CarouselContent>
                  {packagesTutor.map((packageItem: any, index: number) => (
                    <CarouselItem
                      key={index}
                      className='my-4 md:basis-1/2 lg:basis-1/3 '
                      onClick={() => setSelectedPackage(packageItem)}
                    >
                      <div
                        className={`flex p-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out border hover:scale-110 ${packageItem.subject.name === subjectName ? 'bg-[#8d6cd1] text-white' : ''}`}
                      >
                        <Image
                          src={
                            packageItem.image || `https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png`
                          }
                          alt='Avatar'
                          width={60}
                          height={60}
                          className='rounded-md'
                        />
                        <div className='mx-2'>
                          <p className=''>{packageItem.subject.name}</p>
                          <p className='text-yellow-400'>$10 / hour</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className='flex gap-4 p-4 shadow-lg border rounded-xl'>
              <Image
                src={selectedPackage.image || `https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png`}
                alt='Avatar'
                width={100}
                height={100}
                className='rounded-md'
              />
              <div className='mx-2 font-semibold'>
                <p className='text-3xl font-bold'>{selectedPackage.subject.name}</p>
                <p className='text-yellow-700'>${selectedPackage.pricePerHour} / hour</p>
                <div className='flex items-center gap-4'>
                  <p className=''>⭐{selectedPackage.averageFeedbacksValue} </p>
                  <p className='p-2 bg-green-400 rounded-xl text-white'>{selectedPackage.status}</p>
                </div>
                <p className='font-semibold'>Total Reservations {selectedPackage.totalReservations}</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <Button variant='default' className='flex-1'>
              Đặt đơn
            </Button>
            <Button variant='secondary' className='flex-1'>
              Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TutorInfo
