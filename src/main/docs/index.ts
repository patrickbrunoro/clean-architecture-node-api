import { loginPath, signUpPath, surveyPath, surveyResultPath } from '@/main/docs/paths/'
import {
  accountSchema, addSurveyParamsSchema, addSurveyResultParamsSchema, apiKeyAuthSchema,
  errorSchema,
  loginParamsSchema, signUpParamsSchema,
  surveyAnswerSchema, surveyResultSchema,
  surveySchema,
  surveysSchema
} from '@/main/docs/schemas/'
import { badRequest, forbidden, notFound, serverError, unauthorized } from '@/main/docs/components/'

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
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    addSurveyResultParams: addSurveyResultParamsSchema,
    surveyResult: surveyResultSchema,
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
