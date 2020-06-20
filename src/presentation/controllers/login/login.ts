import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/http-helpers'
import { MissingParamError } from '../../errors'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) { return await Promise.resolve(badRequest(new MissingParamError('email'))) }
    if (!httpRequest.body.password) { return await Promise.resolve(badRequest(new MissingParamError('password'))) }
  }
}
