import type { Knex } from "knex"
import type { JWT } from "@fastify/jwt"

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT
  }

  interface FastifyInstance {
    knex: Knex
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}