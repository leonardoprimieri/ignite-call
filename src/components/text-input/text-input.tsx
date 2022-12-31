import { Text, TextInput as IgniteTextInput } from '@ignite-ui/react'
import { ComponentProps, forwardRef } from 'react'
import { Container, ErrorMessageLabel } from './text-input-styles'

type Props = {
  label?: string
  errorMessage?: string
} & ComponentProps<typeof IgniteTextInput>

export default forwardRef(function TextInput(
  { label, errorMessage, ...props }: Props,
  ref,
) {
  return (
    <Container>
      {Boolean(label) && <Text size="sm">{label}</Text>}
      <IgniteTextInput ref={ref as any} {...props} />
      {Boolean(errorMessage) && (
        <ErrorMessageLabel size="sm">{errorMessage}</ErrorMessageLabel>
      )}
    </Container>
  )
})
