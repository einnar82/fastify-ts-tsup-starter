import { createServer } from './server.js';

const app = await createServer();

const port = Number(process.env.PORT) || 3000;

try {
  await app.listen({ port });
  console.log(`🚀 Server running at http://localhost:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
