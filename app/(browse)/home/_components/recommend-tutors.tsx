import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const RecommendTutors = () => {
  return (
    <div className='my-8'>
      <p className='text-2xl font-semibold'>Đề xuất giảng viên ưu tú</p>
      <div className='flex justify-center my-8'>
        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className='w-full max-w-5xl'
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4 my-4 '>
                <Link href={`/tutor/${index + 1}`}>
                  <Card className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
                    <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
                      <Image src='/assets/avatar-tutor.png' alt='Avatar' width={200} height={200} layout='responsive' />
                      <p className='py-4'>Tutor Name {index + 1}</p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default RecommendTutors
