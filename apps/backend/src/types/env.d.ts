import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      NODE_ENV: 'development' | 'production' | 'test';
    };
  }
}
