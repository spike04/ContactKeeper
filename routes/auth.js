const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  config = require('config'),
  { check, validationResult } = require('express-validator'),
  User = require('../models/User'),
  auth = require('../middleware/auth')

// @route   GET api/auth
// @desc    Get Logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    return res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/auth
// @desc    Auth User & get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid Email').isEmail(),
    check(
      'password',
      'Please Enter a Password with 6 or more character'
    ).exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' })

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
