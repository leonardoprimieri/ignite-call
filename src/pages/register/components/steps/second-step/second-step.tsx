import { Button, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { Form, GoogleCalendarContainer } from './second-step-styles'

type Props = {
  setFormStep(step: number): void
}

export default function SecondStep({ setFormStep }: Props) {
  const handleSignIn = () => signIn('google')

  return (
    <Form>
      <GoogleCalendarContainer>
        <Text>Google Calendar</Text>
        <Button variant="secondary" onClick={handleSignIn}>
          Conectar <ArrowRight />
        </Button>
      </GoogleCalendarContainer>
      <Button disabled>
        Próximo passo
        <ArrowRight />
      </Button>
    </Form>
  )
}
