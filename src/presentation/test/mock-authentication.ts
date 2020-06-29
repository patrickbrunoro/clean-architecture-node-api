import { Authentication, AuthenticationParams } from '@/domain/usecases/account/authentication'
import { AuthenticationModel } from '@/domain/models/authentication'
import { mockAuthenticationModel } from '@/domain/test'

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<AuthenticationModel> {
      return await Promise.resolve(mockAuthenticationModel())
    }
  }
  return new AuthenticationStub()
}
