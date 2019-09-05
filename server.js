const express = require('express'),
  app = express(),
  middleware = require('./config/middleware'),
  routes = require('./config/routes'),
  db = require('./config/db')

// Middleware
middleware(app)
// Connect DB
db()

app.get('/', (req, res) => res.send('<h2>Welcome API</h2>'))

// Routes
routes(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
