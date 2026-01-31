import './index.css'

const ProductCard = props => {
  const {productData} = props

  const {
    _id,
    title,
    brand,
    image_url,
    rating,
    price,
  } = productData

  const trackClick = async () => {
    try {
      await fetch('http://localhost:5000/api/behavior', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'demo-user',
          productId: _id,
          action: 'click',
        }),
      })
    } catch (err) {
      console.error('Tracking failed', err)
    }
  }

  return (
    <li className="product-item" onClick={trackClick}>
      <img src={image_url} alt={title} className="thumbnail" />

      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>

      <div className="product-details">
        <p className="price">Rs {price}/-</p>

        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default ProductCard
