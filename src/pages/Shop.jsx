import React, { useEffect } from 'react'
import { useProduct } from '../contexts/productContext'
import ProductCard from '../components/ProductCard'

function Shop() {
  const { products, fetchProducts, nextPage, prevPage, loading, limit, total, skip } = useProduct()

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) return <p className='text-cenetr text-2xl'>Loading.........</p>
  return (
    <div className='px-20 py-10'>
      <h1 className='text-center font-bold text-4xl my-5'>All Products here</h1>
      <div className='grid grid-cols-5 gap-10 bg-gray-100 p-10'>
        {products.map((product) => (
          <div key={ product.id }><ProductCard product={ product } /></div>
        ))}
      </div>
      <div className='w-full flex justify-between items-center my-5'>
        <button onClick={() => {prevPage()}} disabled={skip === 0}
        className='text-9xl hover:bg-gray-400 delay-75 transition-all ease-linear hover:text-black 
        text-gray-800 cursor-pointer rounded-full p-2'><i className='bx bxs-chevrons-left'></i></button>
        <button onClick={() => {nextPage()}} disabled={ limit + skip === total }
        className='text-9xl hover:bg-gray-400 delay-75 transition-all ease-linear hover:text-black 
        text-gray-800 cursor-pointer rounded-full p-2'><i className='bx bxs-chevrons-right'></i></button>
      </div>
    </div>
  )
}

export default Shop
