import fp from "fastify-plugin"
import knex from "knex"
import type { FastifyInstance } from "fastify"

function knexPlugin(server: FastifyInstance, _options, next) {
  const knexConnection = knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
  })

  server.decorate("knex", knexConnection)

  server.addHook("onClose", (instance, done) => {
    if (instance.knex === knexConnection) {
      instance.knex.destroy()
      delete instance.knex
    }
    done()
  })

  next()
}

export default fp(knexPlugin)
