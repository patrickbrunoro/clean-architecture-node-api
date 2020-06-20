import { makeValidationComposite } from '../../../main/factories/signup-validation'
import { ValidationComposite } from '../../helpers/validators/validation-composite'
import { RequiredFiledValidation } from '../../helpers/validators/required-filed-validation'
import { Validation } from '../../helpers/validators/validation'

jest.mock('../../helpers/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeValidationComposite()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'confirmPassword']) {
      validations.push(new RequiredFiledValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
