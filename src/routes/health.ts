import { FastifyInstance } from 'fastify';

export default async function healthRoute(fastify: FastifyInstance) {
  fastify.get('/health', async (request, reply) => {
    return reply.send({ status: 'ok 11' });
  });
}
    