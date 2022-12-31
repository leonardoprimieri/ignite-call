import { Heading, MultiStep, Text } from '@ignite-ui/react'
import { ReactNode, useState } from 'react'
import FirstStep from './components/steps/first-step/fist-step'
import SecondStep from './components/steps/second-step/second-step'
import { Container, Header } from './register-styles'

export default function Register() {
  const [formStep, setFormStep] = useState(1)

  const formStepContents: Record<number, ReactNode> = {
    1: <FirstStep setFormStep={setFormStep} />,
    2: <SecondStep setFormStep={setFormStep} />,
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={formStep} />
        {formStepContents[formStep]}
      </Header>
    </Container>
  )
}
