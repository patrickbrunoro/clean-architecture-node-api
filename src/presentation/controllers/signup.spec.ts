import { SignUpController } from './signup'

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
  })
})
