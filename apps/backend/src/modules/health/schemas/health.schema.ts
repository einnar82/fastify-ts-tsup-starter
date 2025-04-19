export const HealthSchema =  {
  tags: ['health'],
  description: "API Healthcheck",
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' }
      }
    }
  }
}