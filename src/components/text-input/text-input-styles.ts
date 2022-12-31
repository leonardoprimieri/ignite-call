import { styled, Text } from '@ignite-ui/react'

export const Container = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ErrorMessageLabel = styled(Text, {
  color: '#f75a68',
  marginLeft: '$1',
})
