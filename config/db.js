const mongoose = require('mongoose'),
  config = require('config'),
  mongoConfig = config.get('mongoConfig')

mongoose.Promise = global.Promise
mongoose.set('debug', true)

module.exports = async () => {
  try {
    await mongoose.connect(mongoConfig, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('MongoDB Connected ...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
