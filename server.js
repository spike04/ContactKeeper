const express = require('express'),
  middleware = require('./config/middleware'),
  routes = require('./config/routes')

const app = express()

middleware(app)
routes(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
