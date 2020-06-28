import { loginPath, signUpPath, surveyPath } from '@/main/docs/paths'
import {
  accountSchema, apiKeyAuthSchema,
  errorSchema,
  loginParamsSchema, signUpParamsSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema
} from '@/main/docs/schemas'
import { badRequest, forbidden, notFound, serverError, unauthorized } from '@/main/docs/components'

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
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    serverError
  }

}
