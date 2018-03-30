const Driver = require('../models/driver')

exports.create = (req, res, next) => {
  const driverProps = req.body

  Driver.create(driverProps)
    .then(driver => res.send(driver))
    .catch(next)
}

exports.edit = (req, res, next) => {
  const driverId = req.params.id
  const driverProps = req.body

  Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
    .then(() => Driver.findById({ _id: driverId }))
    .then(driver => res.send(driver))
    .catch(next)
}

exports.remove = (req, res, next) => {
  const driverId = req.params.id
  Driver.findByIdAndRemove({ _id: driverId })
    .then(driver => res.status(204).send(driver))
    .catch(next)
}

exports.index = (req, res, next) => {
  const { lng, lat } = req.query

  Driver.aggregate([{
    $geoNear: {
      near: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
      distanceField: 'geometry',
      spherical: true,
      maxDistance: 200000
    }
  }])
    .then(drivers => res.send(drivers))
    .catch(next)
}
