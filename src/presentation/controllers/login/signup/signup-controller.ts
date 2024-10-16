import {
  HttpRequest,
  HttpResponse,
  Controller,
  AddAccount,
  Validation,
  Authentication
} from './signup-controller-protocols'
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers/http/http-helpers'
import { EmailInUseError } from '@/presentation/errors'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication) {
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, password } = httpRequest.body
      const email = httpRequest.body.email.trim().toLowerCase()
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
      const authenticationModel = await this.authentication.auth(
        {
          email,
          password
        })
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}
