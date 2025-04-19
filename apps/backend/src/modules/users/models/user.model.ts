import type { Knex } from "knex"
import type { UnsavedUser, User } from "../types/user"

const create = async (knex: Knex, data: UnsavedUser): Promise<User> => {
  const user = await knex("users").insert(data).returning("*")
  return user[0]
}

export default {
  create
}
