import {
  ConnectCalendarForm,
  StepFormContainer,
} from '@/pages/register/components'

export default function ConnectCalendar() {
  return (
    <StepFormContainer
      title="Conecte sua agenda!"
      subtitle="Conecte o seu calendário para verificar automaticamente 
      as horas ocupadas e os novos eventos à medida em que são agendados."
      currentStep={2}
    >
      <ConnectCalendarForm />
    </StepFormContainer>
  )
}
