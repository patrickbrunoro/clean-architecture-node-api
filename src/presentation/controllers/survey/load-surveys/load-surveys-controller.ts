import { Controller, HttpRequest, HttpResponse } from './load-survey-controller-protocols'
import { LoadSurveys } from '@/domain/usecases/load-surveys'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helpers'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {

  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (eror) {
      return serverError(eror)
    }
  }
}
