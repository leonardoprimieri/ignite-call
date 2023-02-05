import { z } from 'zod'

export const updateProfileSchema = z.object({
  bio: z.string(),
})

export type UpdateProfileFormOutput = z.output<typeof updateProfileSchema>
export type UpdateProfileFormInput = z.input<typeof updateProfileSchema>
