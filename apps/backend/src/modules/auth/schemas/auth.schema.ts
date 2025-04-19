export const RegisterSchema =  {
  tags: ['auth'],
  description: "register a new user",
  body: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email"
      },
      password: {
        type: "string",
        minLength: 8,
      },
      first_name: {
        type: "string"
      },
      last_name: {
        type: "string"
      }
    },
    required: [
      "email",
      "password",
      "first_name",
      "last_name"
    ]
  }
}