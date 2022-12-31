import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './home-styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image
          alt="preview image"
          src="/assets/app-preview.png"
          height={400}
          quality={100}
          width={827}
          priority
        />
      </Preview>
    </Container>
  )
}
