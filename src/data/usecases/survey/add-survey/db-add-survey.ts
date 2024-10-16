import { AddSurveyParams, AddSurvey, AddSurveyRepository } from './db-add-survey-protocols'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (account: AddSurveyParams): Promise<void> {
    await this.addSurveyRepository.add(account)
  }
}
