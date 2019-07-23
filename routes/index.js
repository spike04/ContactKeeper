const express = require('express'),
  router = express.Router()

router.use('/users', require('./users'))
router.use('/contacts', require('./contacts'))
router.use('/auth', require('./auth'))

module.exports = router
