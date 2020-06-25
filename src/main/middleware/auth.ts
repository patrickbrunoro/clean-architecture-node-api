import { adapterMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/midlewares/auth-middleware'

export const auth = adapterMiddleware(makeAuthMiddleware())
