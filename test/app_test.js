/* global describe it */
const assert = require('assert')
const requrest = require('supertest')
const app = require('../src/app')

describe('The express app', () => {
  it('handles a GET request to /api', done => {
    requrest(app)
      .get('/api')
      .end((_, res) => {
        assert(res.body.message === 'OK')
        done()
      })
  })
})
