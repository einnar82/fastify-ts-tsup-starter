import { FastifyInstance } from 'fastify';
import { HealthSchema } from "@/modules/health/schemas/health.schema"

export default async function healthRoutes(server: FastifyInstance) {
  server.get('/health', {
    schema: HealthSchema
  },  async (_request, reply) => {
    return reply.send({ status: 'ok' });
  });
}
    