import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import photosRoutes from './routes/photos.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/storage', express.static('./storage'))

app.use('/photos', photosRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is running");
})