import fp from 'fastify-plugin';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

type Env = z.infer<typeof envSchema>;

export default fp(async function envPlugin(fastify, _opts) {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    fastify.log.error('❌ Invalid environment variables', result.error.format());
    process.exit(1);
  }

  fastify.decorate('config', result.data); // Inject to Fastify instance
});
