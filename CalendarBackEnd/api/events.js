const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router


//api routes for events include GET/POST/PUT/DELETE
router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll()
    res.status(200).json(events)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body)
    res.status(201).json(newEvent)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updatedEvent = await Event.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    res.status(202).json(updatedEvent[1][0])
  } catch(err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedEvent = await Event.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).json(deletedEvent)
  } catch (err) {
    next(err)
  }
})

