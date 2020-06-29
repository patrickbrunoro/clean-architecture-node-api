import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AuthenticationParams } from '@/domain/usecases/account/authentication'
import { AuthenticationModel } from '@/domain/models/authentication'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAuthenticationModel = (): AuthenticationModel => ({
  name: 'any_name',
  accessToken: 'any_token'
})

export const mockAddAccountParamsWithToken = (): AddAccountParams => Object.assign({}, mockAddAccountParams(), { accessToken: 'any_token' })

export const mockAddAccountParamsWithTokenAndRole = (): AddAccountParams => Object.assign({}, mockAddAccountParamsWithToken(), { role: 'any_role' })

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), { id: 'any_id' })

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
