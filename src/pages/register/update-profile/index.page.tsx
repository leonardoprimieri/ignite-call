import { StepFormContainer, UpdateProfileForm } from '../components'

export default function UpdateProfile() {
  return (
    <StepFormContainer
      title="Bem vindo ao Ignite Call!"
      subtitle="Precisamos de algumas informações para criar seu perfil! 
    Ah, você pode editar essas informações depois."
      currentStep={4}
    >
      <UpdateProfileForm />
    </StepFormContainer>
  )
}
