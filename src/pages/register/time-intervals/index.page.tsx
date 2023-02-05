import { StepFormContainer, TimeIntervalsForm } from '../components'

export default function TimeIntervals() {
  return (
    <StepFormContainer
      title="Quase lá"
      subtitle="Defina o intervalo de horários que você está disponível em cada dia da semana."
      currentStep={3}
    >
      <TimeIntervalsForm />
    </StepFormContainer>
  )
}
