import Fastify from 'fastify';
import autoload from '@fastify/autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import ajvKeywords from "ajv-keywords"
import ApiError from "@/modules/errors/api.error"
import { ValidationError } from "@/modules/errors/common.error"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createServer() {
  try {
    const app = Fastify({
      logger: true,
      ajv: {
        plugins: [
          [ajvKeywords, ["transform"]],
        ],
      },
    });

    app.register(autoload, {
      dir: join(__dirname, 'plugins'),
      options: {},
    });

    app.register(autoload, {
      dir: join(__dirname, 'routes'),
      options: {},
      dirNameRoutePrefix: true,
    });

    app.setErrorHandler((error, _request, reply) => {
      if (error.validation && !(error instanceof ValidationError)) {
        const first = error.validation[0];
        const wrapped = new ValidationError(first?.message ?? 'Invalid input', error.validation);
        return reply.status(wrapped.statusCode).send(wrapped.toJson());
      }

      if (error instanceof ApiError) {
        return reply.status(error.statusCode).send(error.toJson());
      }

      console.error('❌ Application error:', error);

      return reply.status(500).send({
        message: 'Internal server error',
        payload: { error: error.message },
      });
    });

    return app;
  } catch (e) {
    console.error("Error in server: ", e)
  }
}
