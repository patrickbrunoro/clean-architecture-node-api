import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('LogIn Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  describe('Post /signup', () => {
    test('Should return  200 on signup', async () => {
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
  describe('Post /login', () => {
    test('Should return  200 on login', async () => {
      const password = await hash('123123', 12)
      await accountCollection.insertOne({
        name: 'Patrick',
        email: 'patrick@usemobile.com.br',
        password: password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'patrick@usemobile.com.br',
          password: '123123'
        })
        .expect(200)
    })
  })
})
