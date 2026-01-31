import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}
export default withRouter(Header)
