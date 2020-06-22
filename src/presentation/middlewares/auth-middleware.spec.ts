import { forbidden } from '../helpers/http/http-helpers'
import { AccessDeniedError } from '../errors'
import { AuthMiddleware } from './auth-middleware'

const makeSut = (): AuthMiddleware => {
  return new AuthMiddleware()
}

describe('Auth Middleware', () => {
  test('Should returns 403 if no x-access-token exists in headers', async () => {
    const sut = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
