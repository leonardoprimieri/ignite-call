import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const session = useSession()

  return {
    isAuthenticated: session.status === 'authenticated',
    user: session.data?.user,
  }
}
