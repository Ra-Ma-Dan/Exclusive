import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../contexts/productContext'

function ProductDetails() {
    const { fetchProductsInfo, productInfo, loading } = useProduct()
    const { id } = useParams()


    useEffect(() => {

        fetchProductsInfo(id)

    }, [id])


    if(loading) return <p>Loading..................</p>
    
    return (
        <div>
            <h3>Product {id} Fetched</h3>
            <h1>{ productInfo.title }</h1>
            <h2>{ productInfo.discription }</h2>
        </div>
    )
}

export default ProductDetails
