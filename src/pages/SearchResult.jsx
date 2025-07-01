import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProduct } from '../contexts/productContext'
import ProductCard from '../components/ProductCard'

function SearchResult() {
    const { products, fetchProductsBySearch, loading } = useProduct()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    useEffect(()=>{
        if (query) fetchProductsBySearch(query)
    }, [query])


    //if(loading) return <p>Loading.........</p>
    if(!products || products.length === 0) return <p className='text-center text-3xl'>{`No Products Founf for ${query}`}</p>
  return (
    <div className='px-20'>
      <h2 className='text-center text-5xl capitalize font-bold my-20'>{`${ products.length } Products found for "${ query }`}"</h2>
      <div className='grid grid-cols-3 gap-25 rounded-4xl p-10 mb-20 bg-gray-200'>
        {products.map((product) => (
            <div key={ product.id }> <ProductCard product={ product } /></div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
