import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Ccntroller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email@email.com',
        password: 'password',
        passwordConfirmation: 'password'

      }
    }
    const httpResponse = sut.handler(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'name',
        password: 'password',
        passwordConfirmation: 'password'

      }
    }
    const httpResponse = sut.handler(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
