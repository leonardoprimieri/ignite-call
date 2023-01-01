import { Button, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight, Check } from 'phosphor-react'
import { StepFormContainer } from '@/pages/register/components'
import {
  AuthErrorMessage,
  Form,
  GoogleCalendarContainer,
} from './connect-calendar-styles'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'

export default function ConnectCalendar() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  console.log('🚀 ~ file: index.page.tsx:16 ~ ConnectCalendar ~ user', user)

  const hasAuthError = Boolean(router.query.error)

  const handleSignIn = async () => await signIn('google')

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
          <Button
            variant="secondary"
            disabled={isAuthenticated}
            onClick={handleSignIn}
          >
            {isAuthenticated ? 'Conectado' : 'Conectar'}
            {isAuthenticated ? <Check /> : <ArrowRight />}
          </Button>
        </GoogleCalendarContainer>

        {hasAuthError && (
          <AuthErrorMessage size="sm">
            Falha ao se conectar ao Google, verifica se você habilitou as
            permissões de acesso ao Google Calendar.
          </AuthErrorMessage>
        )}

        <Button disabled={!isAuthenticated}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </StepFormContainer>
  )
}
