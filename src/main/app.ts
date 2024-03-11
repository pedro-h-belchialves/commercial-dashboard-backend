import router from '@main/main/routes/seller'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())
app.use('/api', router)

export {app}