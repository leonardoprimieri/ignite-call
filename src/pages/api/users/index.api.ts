import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, username } = req.body

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userAlreadyExists) {
    return res.status(400).json({ error: 'User already exists' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/', // every route can access this cookie
  })

  return res.status(201).json(user)
}
