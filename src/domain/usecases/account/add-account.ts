import { AccountModel } from '../../models/account'

export type AddAccountParams = Omit<AccountModel, 'id'>
export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
