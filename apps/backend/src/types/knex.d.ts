import type { User } from "@/modules/users/types/user"

declare module "knex/types/tables" {
  interface Tables {
    users: User
  }
}