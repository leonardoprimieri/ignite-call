import { useAuth } from '@/hooks'
import { Button, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import {
  AuthErrorMessage,
  Form,
  GoogleCalendarContainer,
} from './connect-calendar-form-styles'

export default function ConnectCalendarForm() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const hasAuthError = Boolean(router.query.error)

  const handleSignIn = async () => await signIn('google')

  const handleNextStep = async () =>
    await router.push('/register/time-intervals')

  return (
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

      <Button onClick={handleNextStep} disabled={!isAuthenticated}>
        Próximo passo
        <ArrowRight />
      </Button>
    </Form>
  )
}
