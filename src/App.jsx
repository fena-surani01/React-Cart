import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter , Routes , Route , Link} from "react-router-dom"
import CartProvider from './context/CartContext'
import { useCart } from './context/CartContext'

function Nav(){
  const {cart} = useCart()
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand fw-bold" to='/'>
                🛒 MyShop
            </Link>

            <div className="ms-auto">
                <Link to="/" className="nav-link d-inline text-white me-3">Home</Link>
                <Link to="/cart" className="nav-link d-inline text-white">Cart ({cart.length})</Link>
            </div>
        </div>
    </nav>
  )
}

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Nav/>

          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
