const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost:27017/nodejs_uber')
}

const routes = require('./routes')

app.set('port', process.env.PORT || '3000')

app.use(bodyParser.json())
app.use(routes)

module.exports = app
