import { Router } from 'express'
import { adapterRoute } from '@/main/adapters/express-route-adapter'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-survey-controller-factory'
import { adminAuth } from '@/main/middleware/admin-auth'
import { auth } from '@/main/middleware/auth'

export default (router: Router): void => {
  router.get('/surveys', auth, adapterRoute(makeLoadSurveysController()))
  router.post('/surveys', adminAuth, adapterRoute(makeAddSurveyController()))
}
