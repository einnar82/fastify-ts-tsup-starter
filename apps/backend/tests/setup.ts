import { beforeEach, afterEach } from 'vitest';
import { createServer } from '../src/server';
import { resetTestDatabase } from './utils/db';

let app: Awaited<ReturnType<typeof createServer>>;

beforeEach(async () => {
  app = await createServer();
  await resetTestDatabase();
});

afterEach(async () => {
  await app.close();
});

export { app };
