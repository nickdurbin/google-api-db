const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

module.exports = server => {
  server.use(morgan())
  server.use(helmet())
  server.use(cors())
}