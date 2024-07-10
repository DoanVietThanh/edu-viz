import z from "zod"

export const createPackageSchema = z.object({
  body: z.object({
    subjectId: z.string(),
    images: z.array(z.string()).catch([]),
    video: z.string().catch(""),
    pricePerHour: z
      .number()
      .int()
      .min(50)
      .max(500)
      .transform((data) => {
        return data - (data % 50) //làm tròn xuống sao cho chia hết cho 50
      }),
  }),
})

export type TCreatePackageSchema = z.infer<typeof createPackageSchema>
