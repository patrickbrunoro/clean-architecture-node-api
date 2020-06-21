import { AddSurvey, AddSurveyModel, HttpRequest, Validation } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'
import { badRequest, noContent, serverError } from '../../../helpers/http/http-helpers'

const makeValidationStub = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}
const makeAddSurveyStub = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyModel): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  return new AddSurveyStub()
}

interface SutTypes {
  sut: AddSurveyController
  addSurveyStub: AddSurvey
  validationStub: Validation
}
const makeSut = (): SutTypes => {
  const addSurveyStub = makeAddSurveyStub()
  const validationStub = makeValidationStub()
  const sut = new AddSurveyController(validationStub, addSurveyStub)
  return {
    sut,
    addSurveyStub,
    validationStub
  }
}
const makeHttpRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [{ image: 'any_image', answer: 'any_answer' }]
  }
})

describe('AddSurvey Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeHttpRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = makeHttpRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call AddSurvey with correct values', async () => {
    const { sut, addSurveyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyStub, 'add')
    const httpRequest = makeHttpRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 500 AddSurvey throws', async () => {
    const { sut, addSurveyStub } = makeSut()
    jest.spyOn(addSurveyStub, 'add').mockReturnValueOnce(Promise.reject(new Error()))
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
