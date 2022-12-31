import { Heading, MultiStep, Text } from '@ignite-ui/react'
import { ReactNode } from 'react'
import { Container, Header } from './step-form-container-styles'

type Props = {
  title: string
  subtitle: string
  currentStep: number
  children: ReactNode
}

export default function StepFormContainer({
  children,
  currentStep = 1,
  subtitle,
  title,
}: Props) {
  return (
    <Container>
      <Header>
        <Heading as="strong">{title}</Heading>
        <Text>{subtitle}</Text>
        <MultiStep size={4} currentStep={currentStep} />
        {children}
      </Header>
    </Container>
  )
}
