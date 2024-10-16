export const signUpParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },
  required: ['email', 'name', 'password', 'passwordConfirmation']
}
