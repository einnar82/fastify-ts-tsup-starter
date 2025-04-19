import fp from "fastify-plugin"
import swagger, { FastifyDynamicSwaggerOptions } from "@fastify/swagger"
import swaggerUi from "@fastify/swagger-ui"
import packageJson from "../../package.json"

export default fp<FastifyDynamicSwaggerOptions>(async (fastify) => {
  await fastify.register(swagger, {
    swagger: {
      info: {
        title: "Backend API",
        description: "This is the api documentation for the backend.",
        version: packageJson.version,
      },
      tags: [
        {
          name: "auth",
          description: "Endpoints for authentication.",
        },
        { name: "health", description: "Endpoints for health endpoints." },
      ],
      securityDefinitions: {
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "JWT Authorization header using the Bearer scheme",
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        429: {
          description: "Too Many Requests",
        },
      },
    },
  })
  await fastify.register(swaggerUi, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (_request, _reply, next) {
        next()
      },
      preHandler: function (_request, _reply, next) {
        next()
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
})
