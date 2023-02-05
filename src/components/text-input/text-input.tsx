import {
  Text,
  TextInput as IgniteTextInput,
  TextArea as IgniteTextArea,
} from '@ignite-ui/react'
import { ComponentProps, forwardRef } from 'react'
import { Container, ErrorMessageLabel } from './text-input-styles'

type Props = {
  label?: string
  errorMessage?: string
  textArea?: boolean
} & ComponentProps<typeof IgniteTextInput>

export default forwardRef(function TextInput(
  { label, errorMessage, textArea, ...props }: Props,
  ref,
) {
  return (
    <Container>
      {Boolean(label) && <Text size="sm">{label}</Text>}
      {textArea ? (
        <IgniteTextArea ref={ref as any} {...props} />
      ) : (
        <IgniteTextInput ref={ref as any} {...props} />
      )}

      {Boolean(errorMessage) && (
        <ErrorMessageLabel size="sm">{errorMessage}</ErrorMessageLabel>
      )}
    </Container>
  )
})
