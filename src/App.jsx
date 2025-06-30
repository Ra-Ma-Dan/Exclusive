import Header from './components/Header'
import UpperHeader from './components/upperHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ProductProvider } from './contexts/productContext'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/Product_Details'

function App() {

  return (
    <>
      <ProductProvider>
      <UpperHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/product-info/:id' element={<ProductDetails />}/>
        <Route path='/product-category/:category' element={<ProductCategory />}/>
      </Routes>

      </ProductProvider>
    </>
  )
}

export default App
