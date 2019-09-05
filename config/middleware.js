const express = require('express'),
  cors = require('cors'),
  morgan = require('morgan')

module.exports = app => {
  app.use(express.json({ extended: false }))
  // CORS
  app.use(cors())
  // MORGAN
  app.use(morgan('dev'))
}
