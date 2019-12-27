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

router.post('/', async (req, res, next) => {
  try {
    const [id] = await db("places").insert(req.body)
    const newPlace = await db("places").where('id', id).first()
    return res.status(201).json(newPlace)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    await db("places").where("id", req.params.id).update(req.body)
    return res.json(await db("places").where("id", req.params.id).first())
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await db("places").where("id", req.params.id).del()
    return res.status(204).json({ id: req.params.id })
  } catch (error) {
    next(error)
  }
})


module.exports = router