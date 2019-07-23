const express = require('express'),
  cors = require('cors')

module.exports = app => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
}
