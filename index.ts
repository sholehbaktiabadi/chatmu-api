import express from 'express'
import { AppDataSource } from './config/db';
import { userRoutes } from './service/user/user.route';
import { authRouter } from './service/auth/auth.route';
import { middleware } from './service/middleware/middleware';

AppDataSource.initialize().then(() => console.log('database connected')).catch(err => console.log(err))
const app = express()
app.use(express.json())
app.use(authRouter)
app.use(middleware, userRoutes)
app.get('/', (_, res)=>{
    return res.send('here we are')
})
app.listen(3000);