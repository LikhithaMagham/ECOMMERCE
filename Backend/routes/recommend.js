const express = require('express')
const Product = require('../models/Product')
const Behavior = require('../models/Behavior')

const router = express.Router()
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params

    const behaviors = await Behavior.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)

    // If no behavior → fallback
    if (behaviors.length === 0) {
      const fallback = await Product.find().limit(5)
      return res.json(fallback)
    }

    // Get categories user interacted with
    const clickedProducts = await Product.find({
      _id: { $in: behaviors.map(b => b.productId) },
    })

    const categories = clickedProducts.map(p => p.category)

    // Recommend from same categories, excluding clicked
    const recommended = await Product.find({
      category: { $in: categories },
      _id: { $nin: behaviors.map(b => b.productId) },
    }).limit(5)

    res.json(recommended)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Recommendation failed' })
  }
})

module.exports = router
