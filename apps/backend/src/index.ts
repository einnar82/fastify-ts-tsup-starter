import { createServer } from './server.js';

const server = await createServer();

const port = Number(process.env.PORT) || 3000;

try {
  await server.listen({ port, host: "0.0.0.0" });
  console.log(`🚀 Server running at http://localhost:${port}`);
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
