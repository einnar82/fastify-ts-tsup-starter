import { FastifyInstance } from 'fastify';

export default async function healthRoute(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    return reply.send({ status: 'ok users 1' });
  });
}
    