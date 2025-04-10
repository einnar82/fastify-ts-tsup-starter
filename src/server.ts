import Fastify from 'fastify';
import autoload from '@fastify/autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createServer() {
  const app = Fastify({ logger: true });

  app.register(autoload, {
    dir: join(__dirname, 'plugins'),
    options: {},
  });

  app.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: {},
    dirNameRoutePrefix: true,
  });

  return app;
}
