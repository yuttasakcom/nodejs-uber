/* global describe it */
const assert = require('assert')
const request = require('supertest')

const app = require('../../src/app')
const Driver = require('../../src/models/driver')

describe('Drivers controller', () => {
  it('POST to /api/drivers creates a new driver', done => {
    Driver.count().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.count().then(newCount => {
            assert(count + 1 === newCount)
            done()
          })
        })
    })
  })

  it('PUT to /api/driver/id edits an existing driver', done => {
    const driver = new Driver({ email: 't@t.com', driving: false })

    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: 't@t.com' })
              .then(driver => {
                assert(driver.driving === true)
                done()
              })
          })
      })
  })

  it('DELETE to /api/drivers/delete can delete a driver', done => {
    const driver = new Driver({ email: 't@t.com', driving: false })

    driver.save()
      .then(() => {
        request(app)
          .delete(`/api/drivers/${driver._id}`)
          .end(() => {
            Driver.findOne({ email: 't@t.com' })
              .then(driver => {
                assert(driver === null)
                done()
              })
          })
      })
  })

  it('GET to /api/dirvers finds drivers in a location', done => {
    const seattleDriver = new Driver({
      email: 'seattle@test.com',
      geometry: {
        type: 'Point',
        coordinates: [-122.4759902, 47.6147628]
      }
    })

    const miamiDriver = new Driver({
      email: 'miami@test.com',
      geometry: {
        type: 'Point',
        coordinates: [-80.253, 25.791]
      }
    })

    Promise.all([seattleDriver.save(), miamiDriver.save()])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((_, res) => {
            assert(res.body.length === 1)
            assert(res.body[0].email === 'miami@test.com')
            done()
          })
      })
  })
})
