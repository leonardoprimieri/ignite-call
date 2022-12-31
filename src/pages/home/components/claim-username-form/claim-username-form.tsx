import { Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Form } from './claim-username-form-styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { TextInput } from '@/components'
import {
  ClaimUsernameFormData,
  claimUsernameFormSchema,
} from './claim-username-form-schema'

export function ClaimUsernameForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const handleClaimUsername = async ({ username }: ClaimUsernameFormData) => {
    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
          errorMessage={errors.username?.message ?? ''}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
    </>
  )
}
