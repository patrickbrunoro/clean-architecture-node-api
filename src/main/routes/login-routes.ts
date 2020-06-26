import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { makeSignUpController } from '@/main/factories/controllers/login/signup/signup-controller-factory'
import { makeloginController } from '@/main/factories/controllers/login/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adapterRoute(makeSignUpController()))
  router.post('/login', adapterRoute(makeloginController()))
}
