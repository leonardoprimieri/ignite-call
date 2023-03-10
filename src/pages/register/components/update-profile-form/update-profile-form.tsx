import TextInput from '@/components/text-input/text-input'
import { api } from '@/lib/axios'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { Avatar, Button, Text } from '@ignite-ui/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession as getServerSideSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { UpdateProfileFormOutput } from './update-profile-schema'
import { FormAnnotation, ProfileBox } from './update-profile-styles'

export default function UpdateProfileForm() {
  const session = useSession()

  const router = useRouter()

  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm()

  const handleUpdateProfile = async (data: any) => {
    const formData = data as UpdateProfileFormOutput

    await api.put('/users/profile/update', {
      bio: formData.bio,
    })

    await router.push(`/schedule/${session?.data?.user?.username}`)
  }

  return (
    <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
      <Text size="sm">Foto de perfil</Text>
      <Avatar
        src={session?.data?.user?.avatar_url}
        alt={session?.data?.user?.name}
      />
      <TextInput textArea {...register('bio')} label="Sobre você" />
      <FormAnnotation size="sm">
        Fale um pouco sobre você. Isto será exibido em sua página pessoal.
      </FormAnnotation>
      <Button type="submit" disabled={isSubmitting}>
        Finalizar
        <ArrowRight />
      </Button>
    </ProfileBox>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getServerSideSession(req, res, buildNextAuthOptions(req, res))

  return {
    props: {
      session,
    },
  }
}
