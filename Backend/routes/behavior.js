const express = require('express')
const Behavior = require('../models/Behavior')

const router = express.Router()

router.post('/', async (req, res) => {
  await Behavior.create(req.body)
  res.json({status: 'ok'})
})

module.exports = router
