import type { FastifyInstance } from 'fastify';
import { registerUser } from '@/modules/auth/services/auth.service';

export default async function authRoutes(server: FastifyInstance) {
  const db = server.knex;

  server.post('/auth/register', async (request, reply) => {
    const { email, password, name } = request.body as {
      email: string;
      password: string;
      name?: string;
    };

    // Basic validation
    if (!email || !password) {
      return reply.status(400).send({ error: 'Email and password are required' });
    }

    try {
      const user = await registerUser(db, { email, password, name: name ?? '' });
      const token = server.jwt.sign({ id: user.id, email: user.email });
      return reply.send({ token });
    } catch (err: any) {
      // Handle unique email violation
      if (err.code === '23505') {
        return reply.status(409).send({ error: 'Email already exists' });
      }
      request.log.error(err);
      return reply.status(500).send({ error: 'Registration failed' });
    }
  });
}
