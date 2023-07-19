import { log } from 'console'
import 'reflect-metadata'
import express, { NextFunction, Request, Response, urlencoded } from 'express'
import todoRoutes from './router/todos'
import connection from './db/config'
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use('/todos', todoRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

connection.sync().then(()=>{
 log('Database synced successfully')
}).catch(err=>{
log("Error", err)
})
app.listen(3000, () => {
  log('Server is listening at http://localhost:3000')
})
