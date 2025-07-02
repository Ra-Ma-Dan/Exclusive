import React from 'react'
import { useProduct } from '../contexts/productContext'

function Shop() {
  const { products, fetchProducts, nextPage, prevPage } = useProduct()
    return (
    <div>
      
    </div>
  )
}

export default Shop
