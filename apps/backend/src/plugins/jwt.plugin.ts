import type { FastifyJWTOptions } from "@fastify/jwt"
import fastifyJwtPlugin from "@fastify/jwt"
import type { FastifyInstance, FastifyRequest } from "fastify"
import { UnauthenticatedError } from "@/modules/auth/errors/unauthenticated.error"
import fp from "fastify-plugin"

const jwtPlugin = (server: FastifyInstance) => {
  server.register(fastifyJwtPlugin, {
    secret: process.env.JWT_SECRET_KEY,
  } as FastifyJWTOptions)

  server.decorate("authenticate", async (request: FastifyRequest) => {
    try {
      await request.jwtVerify()
    } catch (_err) {
      throw new UnauthenticatedError()
    }
  })
}

export default fp(jwtPlugin)