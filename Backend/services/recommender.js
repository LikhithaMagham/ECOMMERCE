exports.getRecommendations = async userId => {
  const activity = await Behavior.find({userId})

  if (activity.length === 0) {
    return Product.find().sort({rating: -1}).limit(5)
  }

  const clickedIds = activity.map(a => a.productId)

  const clickedProducts = await Product.find({
    _id: {$in: clickedIds},
  })

  if (clickedProducts.length === 0) {
    return Product.find().sort({rating: -1}).limit(5)
  }

  const categories = [...new Set(clickedProducts.map(p => p.category))]

  const recommendations = await Product.find({
    category: {$in: categories},
    _id: {$nin: clickedIds},
  })
    .sort({rating: -1})
    .limit(5)

  return recommendations
}
