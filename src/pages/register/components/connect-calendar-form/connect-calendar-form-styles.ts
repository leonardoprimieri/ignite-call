import { Box, styled, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const GoogleCalendarContainer = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [`${Text}`]: {
    fontWeight: '$medium',
  },
})

export const AuthErrorMessage = styled(Text, {
  color: '#f75a68',
  margin: '$4 $1',
})
