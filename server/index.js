require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const router = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const mongoose = require('mongoose')
const PORT = process.env.EXPRESS_DEV_PORT || 5000

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_DB_URL_SV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Atlas')).catch((err) => console.error(err))

app.use(router)
app.use(postRouter)


app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})