import MockDate from 'mockdate'
import { mockLoadSurveyById } from '@/presentation/test'
import { LoadSurveyResultController } from './load-survey-result-controller'
import { LoadSurveyById, HttpRequest } from './load-survey-result.controller-protocols'
import { forbidden } from '@/presentation/helpers/http/http-helpers'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_survey_id'
  }
})

type SutTypes ={
  sut: LoadSurveyResultController
  loadSurveyByIdStub: LoadSurveyById
}
const makeSut = (): SutTypes => {
  const loadSurveyByIdStub = mockLoadSurveyById()
  const sut = new LoadSurveyResultController(loadSurveyByIdStub)
  return {
    sut,
    loadSurveyByIdStub
  }
}

describe('LoadSurveyResultController', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call LoadSurveyById with correct values', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    const spyLoadById = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(mockRequest())
    expect(spyLoadById).toHaveBeenLastCalledWith('any_survey_id')
  })

  test('Should return 403 LoadSurveyById returns null', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    jest.spyOn(loadSurveyByIdStub, 'loadById').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('surveyId')))
  })
})
