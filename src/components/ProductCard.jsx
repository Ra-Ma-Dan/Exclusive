import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { useState } from "react"
import { useWishlist } from "../contexts/wishListContext"


function ProductCard({ product }) {
    const { toggleFavorite, wishlistItems } = useWishlist()
    const { addToCart } = useCart()

    // const toggleFavorite = () => {
    //     if (isFavorite) {
    //         removeFromWishlist(product.id)
    //     } else {
    //         addToWishlist(product.id)
    //     }
    // }

    const isFavoriteed  = wishlistItems.some((p) => p.id === product.id);
    return (
        <div className='border-2 p-2 rounded-2xl flex flex-col hover:scale-[1.01] cursor-pointer delay-75 transition-all ease-linear'>
            <div className='w-full relative flex justify-center items-center'>
                <img className='rounded-2xl w-full relative' src={product.images[0]} alt="" />
                <div className='absolute top-4 right-4 flex flex-col gap-3'>
                    <button><i className='text-2xl cursor-pointer hover:scale-95 hover:text-red-300 bx bx-low-vision'></i></button>
                    <button onClick={() => { toggleFavorite(product) }}>
                        <i className={`text-2xl cursor-pointer ${isFavoriteed ? 'text-red-500 bx bxs-heart' : 'text-black bx bx-heart'}
                        hover:scale-95 hover:text-red-300 `} ></i>
                    </button>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='font-mono font-black'>{product.title}</h3>
                <p>${product.price}</p>
                {/* <div className='text-center'>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bxs-star-half'></i>
                </div> */}
            </div>
            <div className='flex justify-between items-center'>
                <Link to={`/product-info/${product.id}`}><button className='font-bold bg-gray-300 px-5 py-3 hover:bg-gray-500'>
                    view info</button></Link>
                <button onClick={() => { addToCart(product) }}
                    className='bg-gray-300 font-bold px-5 py-3 hover:bg-gray-500'>Add to cart</button>

            </div>
        </div>
    )
}

export default ProductCard
