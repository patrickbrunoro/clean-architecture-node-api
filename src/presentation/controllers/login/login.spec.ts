import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helpers'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  const makeSut = (): LoginController => {
    return new LoginController()
  }
  test('Should return 400 if no e-mail is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
})
