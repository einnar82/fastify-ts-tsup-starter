import { Knex } from 'knex';
import bcrypt from 'bcrypt';

interface RegisterInput {
  email: string;
  password: string;
  name: string;
}

export async function registerUser(db: Knex, input: RegisterInput) {
  const hashed = await bcrypt.hash(input.password, 10);
  const [user] = await db('users')
    .insert({
      email: input.email,
      password: hashed,
      name: input.name,
    })
    .returning(['id', 'email']);
  return user;
}
