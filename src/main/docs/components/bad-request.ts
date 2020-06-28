export const badRequest = {
  description: 'Credenciais inválidas',
  content: {
    'application/json': {
      schema: {
        $ref: '#schemas/error'
      }
    }
  }
}
