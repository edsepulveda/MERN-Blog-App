require('dotenv').config()

const express = require('express')
const app = express()
const helmet = require('helmet')
const router = require('./routes/auth.routes')
const PORT = process.env.EXPRESS_DEV_PORT


app.use(express.json())
app.use(helmet())

app.use(router)


app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})