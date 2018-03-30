const http = require('http')
const app = require('./app')
const server = http.createServer(app)

server.listen(app.get('port'), err => {
  if (err) throw err

  console.log(`Server running at http://localhost:${app.get('port')}`)
})
