'use client'

import { approveOrder } from '@/actions/reservation/approve-order'
import { isBaseError } from '@/lib/utils'
import React, { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

type Props = { reservationId: string }

function Actions({ reservationId }: Props) {
  const [isApproving, startApproveOrder] = useTransition()
  const [isRejecting, startRejectOrder] = useTransition()

  const handleApproveOrder = () => {
    if (isApproving || isRejecting) return

    startApproveOrder(() => {
      approveOrder(reservationId)
        .then(() => {
          toast.success('Approve order successfully')
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  return (
    <div className='flex items-center justify-end gap-x-4'>
      <Button disabled={isApproving || isRejecting} variant='outline'>
        Reject
      </Button>
      <Button disabled={isApproving || isRejecting} onClick={handleApproveOrder}>
        Approve
      </Button>
    </div>
  )
}

export default Actions
