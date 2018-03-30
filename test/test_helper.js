/* global before beforeEach */
const mongoose = require('mongoose')

before(done => {
  mongoose.connect('mongodb://localhost:27017/nodejs_uber_test')
  mongoose.connection
    .once('open', () => done())
    .on('error', err => console.warn('Waning', err))
})

beforeEach(done => {
  const { drivers } = mongoose.connection.collections
  drivers.drop()
    .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(() => done())
    .catch(() => done())
})
