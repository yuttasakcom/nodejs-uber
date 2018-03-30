const router = require('express').Router()
const DriverController = require('../controllers/driverController')

// Greeting
router.get('/', (req, res) => {
  res.json({ message: 'OK' })
})

// Drivers
router.post('/drivers', DriverController.create)
router.put('/drivers/:id', DriverController.edit)
router.delete('/drivers/:id', DriverController.remove)
router.get('/drivers', DriverController.index)

module.exports = router
