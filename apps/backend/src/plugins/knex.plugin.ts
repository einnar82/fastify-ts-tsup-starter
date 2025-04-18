import fp from 'fastify-plugin';
import knex from 'knex';
import type { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default fp(async (server: FastifyInstance) => {
  const knexConnection = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
  });

  server.decorate('knex', knexConnection);

  server.addHook('onClose', async (instance) => {
    await knexConnection.destroy();
  });
});

