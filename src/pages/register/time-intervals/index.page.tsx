import TextInput from '@/components/text-input/text-input'
import { Button, Checkbox, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { StepFormContainer } from '../components'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './time-intervals-styles'

export default function TimeIntervals() {
  return (
    <StepFormContainer
      title="Quase lá"
      subtitle="Defina o intervalo de horários que você está disponível em cada dia da semana."
      currentStep={3}
    >
      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </StepFormContainer>
  )
}
