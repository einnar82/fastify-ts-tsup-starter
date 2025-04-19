import type { FastifyInstance } from 'fastify';
import { register } from "@/modules/auth/controllers/auth.controller"
import { RegisterSchema } from "@/modules/auth/schemas/auth.schema"

export default async function authRoutes(server: FastifyInstance) {
  server.post('/api/auth/register', {
    schema: RegisterSchema
  }, register);
}
    