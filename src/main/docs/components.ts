
import { apiKeyAuthSchema } from '@/main/docs/schemas/'
import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
} from '@/main/docs/components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  serverError
}
