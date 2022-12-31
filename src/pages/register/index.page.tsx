import { RegisterForm, StepFormContainer } from './components'

export default function Register() {
  return (
    <StepFormContainer
      title="Bem vindo ao Ignite Call!"
      subtitle="Precisamos de algumas informações para criar seu perfil! 
      Ah, você pode editar essas informações depois."
      currentStep={1}
    >
      <RegisterForm />
    </StepFormContainer>
  )
}
