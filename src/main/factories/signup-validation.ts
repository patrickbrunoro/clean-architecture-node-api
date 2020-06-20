
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFiledValidation } from '../../presentation/helpers/validators/required-filed-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFiledValidation(field))
  }
  return new ValidationComposite(validations)
}
