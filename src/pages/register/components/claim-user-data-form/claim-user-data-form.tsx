import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@ignite-ui/react'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import TextInput from '../../../../components/text-input/text-input'
import { api } from '../../../../lib/axios'
import { Form } from './claim-user-data-form-styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((value) => value.toLowerCase()),
  name: z.string().min(3, {
    message: 'O nome precisa ter pelo menos 3 letras.',
  }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function ClaimUserDataForm() {
  const params = useRouter().query

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  useEffect(() => {
    if (!params?.username) return
    setValue('username', String(params.username))
  }, [params.username, setValue])

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data?.error)
      }
    }
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleRegister)}>
      <TextInput
        label="Nome de usuário"
        placeholder="seu-usuário"
        prefix="ignite.com/"
        {...register('username')}
        errorMessage={errors.username?.message}
      />
      <TextInput
        label="Nome completo"
        placeholder="Seu nome"
        {...register('name')}
        errorMessage={errors.name?.message}
      />
      <Button type="submit" disabled={isSubmitting}>
        Próximo passo
        <ArrowRight />
      </Button>
    </Form>
  )
}
