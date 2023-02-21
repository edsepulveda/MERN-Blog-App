const router = require('express').Router()


router.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})


router.post('/register', (req, res) => {
  res.json('Testing is going Ok for now')
})

router.post('/login', (req, res) => {
  res.json('Now Testing for login page')
})

module.exports = router