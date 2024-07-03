import React from "react"
import Image from "next/image"
import { type MessageDetail } from "@/actions/chat/get-messages"
import { type User } from "@prisma/client"

type Props = { message: MessageDetail; otherUser: User }

function RejectMessage({ message, otherUser }: Props) {
  const reservation = message.reservation!
  const isTutor = reservation.studentId === otherUser.id

  return (
    <div className="flex min-h-full w-full flex-col gap-y-1 rounded-lg border-2 border-primary bg-muted p-4">
      <div className="font-bold">
        {!isTutor ? otherUser.fullName : "You"} has rejected the reservation
      </div>
      <div className="flex flex-wrap items-center gap-1 text-sm font-bold text-muted-foreground">
        <div className="text-foreground">Order:</div>
        <div className="flex items-center text-coin">
          <Image
            src="/icons/coin.png"
            width={16}
            height={16}
            className="object-cover"
            alt="coin"
          />
          {reservation.paidPrice}
        </div>
        <div>/</div>
        {reservation.package.subject.name} in {reservation.duration} hours
      </div>
      <div className="flex items-center gap-1">
        {!isTutor ? "You" : otherUser.fullName} will be refunded
        <div className="flex items-center font-bold text-coin">
          <Image
            src="/icons/coin.png"
            width={16}
            height={16}
            className="object-cover"
            alt="coin"
          />
          {reservation.paidPrice}
        </div>
      </div>
    </div>
  )
}

export default RejectMessage
