import { Router } from 'express'
import { adapterRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middleware/auth'
import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-controller-factory'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adapterRoute(makeSaveSurveyResultController()))
}
