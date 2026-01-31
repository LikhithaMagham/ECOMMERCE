const mongoose = require('mongoose')
require('dotenv').config()

const Product = require('./models/Product')

mongoose.connect(process.env.MONGO_URI)

async function seed() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const formatted = data.map(p => ({
    title: p.title,
    price: p.price,
    description: p.description,
    category: p.category,
    imageUrl: p.image,
    rating: p.rating.rate,
  }))

  await Product.deleteMany({})
  await Product.insertMany(formatted)

  console.log('Database seeded')
  process.exit()
}

seed()
