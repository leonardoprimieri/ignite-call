import { convertTimeStringInMinutes } from '@/utils/convert-time-string-in-minutes'
import { z } from 'zod'

export const timeIntervalsSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana.',
    })
    .transform((intervals) =>
      intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringInMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringInMinutes(interval.endTime),
        }
      }),
    )
    .refine(
      (intervals) =>
        intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        ),
      {
        message:
          'O horário de início deve ser pelo menos uma hora antes do horário de término.',
      },
    ),
})

export type TimeIntervalsFormOutput = z.output<typeof timeIntervalsSchema>
export type TimeIntervalsFormInput = z.input<typeof timeIntervalsSchema>
