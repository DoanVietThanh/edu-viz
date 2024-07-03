"use client"

import React, { useTransition } from "react"
import { approveOrder } from "@/actions/reservation/approve-order"
import { rejectOrder } from "@/actions/reservation/reject-order"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

type Props = { reservationId: string }

function Actions({ reservationId }: Props) {
  const [isApproving, startApproveOrder] = useTransition()
  const [isRejecting, startRejectOrder] = useTransition()

  const handleApproveOrder = () => {
    if (isApproving || isRejecting) return

    startApproveOrder(() => {
      approveOrder(reservationId)
        .then(() => {
          toast.success("Approve order successfully")
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  const handleRejectOrder = () => {
    if (isApproving || isRejecting) return

    startRejectOrder(() => {
      rejectOrder(reservationId)
        .then(() => {
          toast.success("Reject order successfully")
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  return (
    <div className="flex items-center justify-end gap-x-4">
      <Button
        onClick={handleRejectOrder}
        disabled={isApproving || isRejecting}
        variant="outline"
      >
        Reject
      </Button>
      <Button
        onClick={handleApproveOrder}
        disabled={isApproving || isRejecting}
      >
        Approve
      </Button>
    </div>
  )
}

export default Actions
