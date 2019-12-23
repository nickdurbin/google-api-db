const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res) => {
  res.send("<h2>I am your server.</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "You have wandered too far. Go back now."})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "There is an issue with the server. Our bad."})
})

module.exports = server