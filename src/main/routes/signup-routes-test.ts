import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Patrick',
        email: 'patrick@usemobile.com.br',
        password: '123123',
        passwordConfirmation: '123123'
      })
      .expect(200)
  })
})
