const express = require('express')
const router = express.Router()
const db = require('../../../data/dbConfig')

router.get('/', async (req, res, next) => {
  try {
    return res.json(await db("places").select())
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const place = await db("places").where("id", req.params.id).select()
    return res.json(place)
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.put('/:id', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.delete('/:id', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})


module.exports = router