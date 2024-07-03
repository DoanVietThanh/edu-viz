import { z } from 'zod'

export const completeOrderSchema = z.object({
  reservationId: z.string(),
  content: z.string().optional(),
  value: z.coerce.number().int().min(1).max(5)
})

export type TCompleteOrderSchema = z.infer<typeof completeOrderSchema>
