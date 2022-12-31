import { z } from 'zod'

export const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((value) => value.toLowerCase()),
})

export type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>
