import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import TextInput from '../../components/text-input/text-input'
import { Container, Form, Header } from './register-styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
        <Form as="form">
          <TextInput label="Nome de usuário" placeholder="seu-usuario" />
          <TextInput label="Nome completo" placeholder="seu-usuario" />
          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
