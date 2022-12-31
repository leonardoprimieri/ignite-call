import { TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './claim-username-form-styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
