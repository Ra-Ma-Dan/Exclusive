import { Link } from "react-router-dom"

function ProductCard({ product }) {
    return (
        <div className='border-2 p-2 rounded-2xl flex flex-col hover:scale-[1.01] cursor-pointer delay-75 transition-all ease-linear'>
            <div className='w-full relative flex justify-center items-center'>
                <img className='rounded-2xl w-full relative' src={product.images[0]} alt="" />
                <div className='absolute top-4 right-4 flex flex-col gap-3'>
                    <i class='text-2xl cursor-pointer hover:scale-95 hover:text-red-300 bx bx-low-vision'></i>
                    <i class='text-2xl cursor-pointer hover:scale-95 hover:text-red-300 bx bx-heart' ></i>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='font-mono font-black'>{ product.title}</h3>
                <p>${ product.price }</p>
                <div className='text-center'>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bxs-star-half'></i>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <Link to={`/product-info/${product.id}`}><button className='bg-gray-300 p-3 hover:bg-gray-500'>
                    view info</button></Link>
                <button className='bg-gray-300 p-3 hover:bg-gray-500'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard
