import { Button, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, GoogleCalendarContainer } from './second-step-styles'

type Props = {
  setFormStep(step: number): void
}

export default function SecondStep({ setFormStep }: Props) {
  return (
    <Form as="form">
      <GoogleCalendarContainer>
        <Text>Google Calendar</Text>
        <Button variant="secondary">
          Conectar <ArrowRight />
        </Button>
      </GoogleCalendarContainer>
      <Button type="submit" disabled>
        Próximo passo
        <ArrowRight />
      </Button>
    </Form>
  )
}
