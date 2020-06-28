
import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResultRepository {
  loadBySurveyId: (surveyData: string) => Promise<SurveyResultModel>
}
