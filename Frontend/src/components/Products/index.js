import {useEffect, useState} from 'react'
import Header from '../Header'
import ProductCard from '../ProductCard'
import './index.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const format = each => ({
    _id: each._id,
    title: each.title || each.name,
    brand: each.category,
    rating: each.rating || each.popularity,
    price: each.price,
    image_url:
      each.imageUrl ||
      each.image_url ||
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png',
  })

  const loadData = async () => {
    try {
      const [productsRes, recRes] = await Promise.all([
        fetch('http://localhost:5000/api/products'),
        fetch('http://localhost:5000/api/recommend/demo-user'),
      ])

      const all = await productsRes.json()
      const rec = await recRes.json()
      
      console.log('ALL PRODUCTS COUNT:', all.length)
      
      console.log('RECOMMENDED PRODUCTS COUNT:', rec.length)

      setProducts(all.map(format))
      setRecommended(rec.map(format))
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  if (loading) return <p style={{textAlign: 'center'}}>Loading...</p>

  return (
    <>
      <Header />

      <div className="products-container">
        <h1>Recommended For You</h1>

        <ul className="products-list">
          {recommended.map(each => (
            <ProductCard key={each._id} productData={each} />
          ))}
        </ul>

        <h1>All Products</h1>

        <ul className="products-list">
          {products.map(each => (
            <ProductCard key={each._id} productData={each} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products
