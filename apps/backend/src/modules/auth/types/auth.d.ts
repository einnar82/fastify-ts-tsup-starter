import type { UnsavedUser } from "@/modules/users/types/user"
import type { FastifyRequest } from "fastify"

export type UserCreateRequest = FastifyRequest<{
  Body: UnsavedUser
}>