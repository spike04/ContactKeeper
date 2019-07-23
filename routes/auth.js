const express = require('express'),
  router = express.Router()

// @route   GET api/auth
// @desc    Get Logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get Logged in User')
})

// @route   GET api/auth
// @desc    Auth User & get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Login User')
})

module.exports = router
