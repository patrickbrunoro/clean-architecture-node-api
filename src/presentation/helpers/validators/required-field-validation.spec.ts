import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../errors'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}
describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation feils', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_field' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
