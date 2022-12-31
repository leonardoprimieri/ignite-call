import { TextInput } from '@/components'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@ignite-ui/react'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterFormData, registerFormSchema } from './register-form-schema'
import { Form } from './register-form-styles'

export default function RegisterForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  useEffect(() => {
    if (!router?.query?.username) return
    setValue('username', String(router?.query?.username))
  }, [router?.query?.username, setValue])

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
      await router.push('/register/connect-calendar')
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
