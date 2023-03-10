import TextInput from '@/components/text-input/text-input'
import { api } from '@/lib/axios'
import { getWeekDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Text } from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import {
  TimeIntervalsFormInput,
  TimeIntervalsFormOutput,
  timeIntervalsSchema,
} from './time-intervals-schema'
import {
  FormError,
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './time-intervals-styles'

export default function TimeIntervalsForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput>({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
    resolver: zodResolver(timeIntervalsSchema),
  })

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })

  const intervals = watch('intervals')

  const handleSetTimeIntervals = async (data: any) => {
    const { intervals } = data as TimeIntervalsFormOutput

    await api.post('/users/time-intervals', { intervals })

    await router.push('/register/update-profile')
  }

  return (
    <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
      <IntervalsContainer>
        {fields.map((field, index) => (
          <IntervalItem key={field.id}>
            <IntervalDay>
              <Controller
                name={`intervals.${index}.enabled`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                  />
                )}
              />
              <Text>{getWeekDays(field.weekDay)}</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size="sm"
                type="time"
                step={60}
                disabled={!intervals[index].enabled}
                {...register(`intervals.${index}.startTime`)}
              />
              <TextInput
                size="sm"
                type="time"
                step={60}
                disabled={!intervals[index].enabled}
                {...register(`intervals.${index}.endTime`)}
              />
            </IntervalInputs>
          </IntervalItem>
        ))}
      </IntervalsContainer>
      {errors.intervals && (
        <FormError size="sm">{errors.intervals.message}</FormError>
      )}
      <Button type="submit" disabled={isSubmitting}>
        Pr??ximo passo
        <ArrowRight />
      </Button>
    </IntervalBox>
  )
}
