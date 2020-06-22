import { Middleware, HttpRequest, HttpResponse } from '../protocols'
import { forbidden } from '../helpers/http/http-helpers'
import { AccessDeniedError } from '../errors'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return await Promise.resolve(forbidden(new AccessDeniedError()))
  }
}
