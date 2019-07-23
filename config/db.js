const mongoose = require('mongoose'),
  {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME
    // } = require('../constant/index.dev')
  } = require('../constant')

const DB_URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.Promise = global.Promise
mongoose.set('debug', true)

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true })
} catch (err) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true
  })
}

mongoose.connection
  .on('open', () => {
    console.log('MongoDB Running')
  })
  .on('error', e => {
    throw e
  })
