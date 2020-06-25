import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-survey-controller-factory'
import { adminAuth } from '../middleware/admin-auth'
import { auth } from '../middleware/auth'

export default (router: Router): void => {
  router.get('/surveys', auth, adapterRoute(makeLoadSurveysController()))
  router.post('/surveys', adminAuth, adapterRoute(makeAddSurveyController()))
}
