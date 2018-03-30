const router = require('express').Router()

const api = require('./api')
const apiNotFound = require('./404')
const error = require('./error')

router.use('/api', api)
router.use(apiNotFound)
router.use(error)

module.exports = router
