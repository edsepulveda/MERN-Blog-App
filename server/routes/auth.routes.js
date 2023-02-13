const router = require('express').Router()


router.get('/', (req, res) => {
  res.send('<h1>Hello Word</h1>')
})


module.exports = router