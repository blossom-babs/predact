import express, { Request, Response, Application } from 'express'

const app: Application = express()
const port = 8050

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ Message: 'Welcome to Zion School Management system Route' })
})

app.get('*', (req: Request, res: Response) => {
  res.status(200).json({ Message: 'You have accessed a route that does not exist.' })
})

app.listen(port)