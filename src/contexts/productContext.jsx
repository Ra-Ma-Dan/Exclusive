import { createContext, useContext, useEffect, useState } from "react"

const ProductContext = createContext()

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [productInfo, setProductInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [skip, setSkip] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 30


    const fetchProducts = async () => {
        setLoading(true)
        try {
            const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

            if (!result.ok) throw new Error('HTTP Error!, Error', Error)

            const data = await result.json()
            console.log("product fethed");
            const product = data.products
            setTotal(data.total)
            setProducts(product)
        } catch (err) {
            console.error("Error Ocoured", err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchProducts()
    }, [])

    const fetchProductsByCategory = async (category) => {
        setLoading(true)
        try {
            const result = await fetch(`https://dummyjson.com/products/category/${category}`)

            if (!result.ok) throw new Error('HTTP Error!, Error', Error)

            const data = await result.json()
            const product = data.products
            setProducts(product)
        } catch (err) {
            console.error("Error Ocoured", err)
        } finally{
            setLoading(false)
        }
    }

    const fetchProductsBySearch = async (query) => {
        setLoading(true)
        try {
            const result = await fetch(`https://dummyjson.com/products/search?q=${query}`)

            if (!result.ok) throw new Error('HTTP Error!, Error', Error)

            const data = await result.json()
            const product = data.products
            setProducts(product)
        } catch (err) {
            console.error("Error Ocoured", err)
        } finally{
            setLoading(false)
        }
    }
    const fetchProductsInfo = async (id) => {
        setLoading(true)
        try {
            const result = await fetch(`https://dummyjson.com/products/${id}`)

            if (!result.ok) throw new Error('HTTP Error!, Error', Error)

            const data = await result.json()
            setProductInfo(data)
        } catch (err) {
            console.error("Error Ocoured", err)
        } finally{
            setLoading(false)
        }
    }

    const prevPage = async () => {
        setLoading(true)
        if (skip - limit > 0) {
            setSkip(skip - limit)
            try {
                const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

                if (!result.ok) throw new Error('HTTP Error!, Error', Error)

                const data = await result.json()
                const product = data.products
                setProducts(product)
            } catch (err) {
                console.error("Error Ocoured", err)
            } finally{
                setLoading(false)
            }
        }
    }
    const nextPage = async (query) => {
        setLoading(true)
        if (skip + limit < total) {
            setSkip(skip + limit)
            try {
                const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

                if (!result.ok) throw new Error('HTTP Error!, Error', Error)

                const data = await result.json()
                const product = data.products
                setProducts(product)
            } catch (err) {
                console.error("Error Ocoured", err)
            } finally{
                setLoading(false)
            }
        }
    }

    const values = {
        loading,
        nextPage,
        prevPage,
        fetchProductsBySearch,
        fetchProductsByCategory,
        fetchProducts,
        products,
        fetchProductsInfo,
        productInfo
    }

    return (
        <ProductContext.Provider value={ values }>
            { children }
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)
