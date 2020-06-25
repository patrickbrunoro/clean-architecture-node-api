import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adapterMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/midlewares/auth-middleware'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-survey-controller-factory'

export default (router: Router): void => {
  const adminAuth = adapterMiddleware(makeAuthMiddleware('admin'))
  const auth = adapterMiddleware(makeAuthMiddleware())
  router.get('/surveys', adminAuth, adapterRoute(makeAddSurveyController()))
  router.post('/surveys', auth, adapterRoute(makeLoadSurveysController()))
}
