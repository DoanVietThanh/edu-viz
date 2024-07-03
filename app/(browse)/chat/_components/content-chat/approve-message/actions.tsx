'use client'

import { completeOrder } from '@/actions/reservation/complete-reservation'
import { TCompleteOrderSchema, completeOrderSchema } from '@/lib/validation/reservation.revalidation'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Props = { reservationId: string }

function Actions({ reservationId }: Props) {
  const [open, setOpen] = useState(false)
  const [isCompleting, startCompleteOrder] = useTransition()

  const form = useForm<TCompleteOrderSchema>({
    resolver: zodResolver(completeOrderSchema),
    defaultValues: {
      content: '',
      value: 5,
      reservationId
    }
  })

  const handleOpenChange = (value: boolean) => {
    if (isCompleting) return
    setOpen(value)
  }

  const onSubmit = async (values: TCompleteOrderSchema) => {
    if (isCompleting) return

    startCompleteOrder(() => {
      completeOrder(values)
        .then(() => {
          toast.success('Complete order successfully')
        })
        .catch((error: Error) => {
          toast.error(error.message)
        })
    })
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>Confirm</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback your experience</DialogTitle>
          <DialogDescription asChild>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 space-y-4'>
                <FormField
                  control={form.control}
                  name='value'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Star</FormLabel>
                      <FormControl>
                        <div className='flex flex-col gap-y-4'>
                          <Input
                            {...field}
                            value={field.value}
                            type='number'
                            onChange={(e) => field.onChange(e.target.value)}
                            placeholder='Stars...'
                            disabled={isCompleting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='content'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Feedback</FormLabel>
                      <FormControl>
                        <div className='flex flex-col gap-y-4'>
                          <Textarea
                            {...field}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            placeholder="Let's me know your experience..."
                            disabled={isCompleting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='flex justify-end gap-x-4'>
                  <DialogClose asChild>
                    <Button disabled={isCompleting} variant='secondary' className='float-right mt-4'>
                      Cancel
                    </Button>
                  </DialogClose>

                  <Button disabled={isCompleting} type='submit' className='float-right mt-4'>
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Actions
