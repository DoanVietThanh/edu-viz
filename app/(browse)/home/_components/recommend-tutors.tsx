import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const RecommendTutors = () => {
  return (
    <div className="my-8">
      <p className="text-2xl font-semibold">Đề xuất giảng viên ưu tú</p>
      <div className="my-8 flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="my-4 md:basis-1/2 lg:basis-1/4"
              >
                <Link href={`/tutor/${index + 1}`}>
                  <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                      <Image
                        src="/assets/avatar-tutor.png"
                        alt="Avatar"
                        width={200}
                        height={200}
                      />
                      <p className="py-4">Tutor Name {index + 1}</p>
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
