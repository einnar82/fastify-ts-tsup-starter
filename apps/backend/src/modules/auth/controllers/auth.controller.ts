import type { FastifyReply } from "fastify"
import UserModel from "@/modules/users/models/user.model"
import bcrypt from 'bcryptjs'
import type { UserCreateRequest } from "@/modules/auth/types/auth"

const register = async (
  request: UserCreateRequest,
  reply: FastifyReply
): Promise<void> => {
  const data = request.body
  const { password: password, ...rest } = data

  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  const userData = { ...rest, password: hashedPassword }
  await UserModel.create(request.server.knex, userData)

  reply.send({
    message: "ok",
  })
}

export {
  register
}
