import { useParams } from "react-router-dom"
import { useProduct } from "../contexts/productContext"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard"


function ProductCategory() {
    const { category } = useParams()
    const { fetchProductsByCategory, products, loading } = useProduct()

    useEffect(() => {
        fetchProductsByCategory(category)
        console.log("Fetched");
        
    }, [category])
    
    if (loading) return <p>Loding..............</p>

    if (!products || products.length === 0) return <p>No Product Found for this Category</p>

    return (
        <div className="px-20 py-10">
            <div className="grid grid-cols-5 gap-10 w-full">
                {products.map((product) => (
                    <div key={product.id}><ProductCard product={product} /></div>
                ))}
            </div>
        </div>
    )
}

export default ProductCategory
