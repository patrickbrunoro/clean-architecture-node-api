import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adaper', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid-email.com')
    expect(isValid).toBe(false)
  })

  test('Should return false if validator returns trur', () => {
    const sut = new EmailValidatorAdapter()

    const isValid = sut.isValid('valid-email@mail.com')
    expect(isValid).toBe(true)
  })
})
