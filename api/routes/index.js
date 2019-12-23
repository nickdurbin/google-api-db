const placeRoutes = require('./places/placesRouter')

module.exports = server => {
  server.use("/api/places", placeRoutes)
}