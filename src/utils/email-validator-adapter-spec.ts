import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adaper', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid-email@mail.com')
    expect(isValid).toBe(false)
  })
})
