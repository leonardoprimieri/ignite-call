import { Text, TextInput as IgniteTextInput } from '@ignite-ui/react'
import { ComponentProps, forwardRef } from 'react'

type Props = {
  label?: string
} & ComponentProps<typeof IgniteTextInput>

export default forwardRef(function TextInput(
  { label, prefix = 'ignite.com/', ...props }: Props,
  ref,
) {
  return (
    <label>
      {Boolean(label) && <Text size="sm">{label}</Text>}
      <IgniteTextInput prefix={prefix} ref={ref as any} {...props} />
    </label>
  )
})
