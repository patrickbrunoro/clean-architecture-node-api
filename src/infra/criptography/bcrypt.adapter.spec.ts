import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt.adapter'

describe('Bcrypt Adapter', () => {
  const salt = 12
  const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(salt)
  }

  test('Should call bcrypt wiht correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
