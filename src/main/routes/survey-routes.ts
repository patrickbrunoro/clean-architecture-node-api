import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adapterMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/midlewares/auth-middleware'

export default (router: Router): void => {
  const adminAuth = adapterMiddleware(makeAuthMiddleware('admin'))
  router.post('/surveys', adminAuth, adapterRoute(makeAddSurveyController()))
}
