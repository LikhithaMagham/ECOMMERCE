import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
)

export default App
