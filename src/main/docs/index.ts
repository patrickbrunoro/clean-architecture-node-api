import { loginPath } from '@/main/docs/paths'
import { accountSchema, errorSchema, loginParamsSchema } from '@/main/docs/schemas'
import { badRequest, notFound, serverError, unauthorized } from '@/main/docs/components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Aprendendo a utlizar o Clean em Node',
    version: '1.0.0'
  },
  servers: [
    { url: '/api' }
  ],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    unauthorized,
    notFound,
    serverError
  }

}
