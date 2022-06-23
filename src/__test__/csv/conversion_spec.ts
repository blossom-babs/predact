import express, { Application } from "express";
import supertest from 'supertest'
const app: Application = express();

xdescribe('file converter', () => {
  it('convert csv to json', async () => {
    const request = supertest(app)
    const res = await request.get('/api/v1/convert');
    expect(res.status).toBe(200)
  })
})
