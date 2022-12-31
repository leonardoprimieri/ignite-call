import { Button, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { StepFormContainer } from '@/pages/register/components'
import { Form, GoogleCalendarContainer } from './connect-calendar-styles'

export default function ConnectCalendar() {
  const handleSignIn = () => signIn('google')

  return (
    <StepFormContainer
      title="Conecte sua agenda!"
      subtitle="Conecte o seu calendário para verificar automaticamente 
      as horas ocupadas e os novos eventos à medida em que são agendados."
      currentStep={2}
    >
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
    </StepFormContainer>
  )
}
