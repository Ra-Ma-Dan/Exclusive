import { useState } from 'react'
import StoreCarosel from '../components/storeCarosel'
import ProductCard from '../components/ProductCard'
import { useProduct } from '../contexts/productContext'
import categories from '../components/categories'
import { Link } from 'react-router-dom'

function Home() {
    const { products, loading } = useProduct()
    const carosels_products = products.slice(20, 31)
    const [cardIndex, setCardIndex] = useState(0)
    const [cartegoryIndex, setCartegoryIndex] = useState(0)

    const no_of_visible_cards = 5


    const best_selling = products.slice(1, 6)
    const our_products = products.slice(8, 18)

    const visible_cards = carosels_products.slice(cardIndex, cardIndex + no_of_visible_cards)
    const visible_categories = categories.slice(cartegoryIndex, cartegoryIndex + no_of_visible_cards)

    const handleCardPrev = () => {
        if (cardIndex > 0) {
            setCardIndex(prev => prev - 1)
            console.log("Clicked")
            console.log(cardIndex);
        }
        //console.log("Clicked");    
    }
    const handlePrev = () => {
        if (cartegoryIndex > 0) setCartegoryIndex(prev => prev - 1)
        //console.log("Clicked");    
    }

    const handleNext = () => {
        if (cartegoryIndex + no_of_visible_cards < categories.length) setCartegoryIndex(prev => prev + 1)
    }

    const handleCardNext = () => {
        if (cardIndex + no_of_visible_cards < carosels_products.length) {
            setCardIndex(prev => prev + 1)
            console.log("Clicked")
            console.log(cardIndex);
        }
    }

    return (
        <>
            <div className='px-25 py-6 bg-gray-300 grid grid-cols-4'>
                <div className='flex flex-col justify-start items-start gap-3'>
                    <button>Men Wears</button>
                    <button>Women's Wears</button>
                    <button>Electronics</button>
                    <button>Utensiles</button>
                    <button>Medicene</button>
                    <button>Baby's & Toys</button>
                    <button>Groceries and Pets</button>
                    <button>Health & Beauty</button>
                    <button>Home & Lifestyle</button>
                    <button>Sports & OutDorrs</button>
                </div>
                <div className='col-span-3'> <StoreCarosel /> </div>
            </div>
            <div className='px-20 py-10'>
                <h3 className='before:bg-red-500 relative before:absolute before:content-[""] 
                    before:h-[150%] before:w-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>Today's</h3>
                <div className='grid grid-cols-4 mt-4'>
                    <h1 className='text-2xl font-serif font-black'>Flash Sales</h1>
                    <div className='flex col-span-2'>
                        <p>10</p>
                        :
                        <p>15</p>
                        :
                        <p>35</p>
                    </div>
                    <div className='flex justify-center items-center gap-10'>
                        <button className='cursor-pointer bg-gray-200 px-5 py-4 rounded-2xl hover:bg-gray-100
                         font-black' onClick={() => { handleCardNext() }}> --&gt; </button>
                        <button className='cursor-pointer bg-gray-200 px-5 py-4 rounded-2xl hover:bg-gray-100
                         font-black' onClick={() => { handleCardPrev() }}> &lt;-- </button>
                    </div>
                </div>
            </div>
            {loading ? <p className='text-center text-3xl '> Loading...... </p> :
                <div className='px-25'>
                    <div>
                        <div className="flex gap-10 w-full">
                            {visible_cards.map((product) => (
                                <div key={product.id}><ProductCard product={product} /></div>
                            ))}
                        </div>
                        <div className='w-full flex justify-center m-10'>
                            <button className='m-3 cursor-pointer hover:bg-red-400 px-25 rounded-lg font-sans py-5
                        font-bold bg-red-500'>
                                View All Products
                            </button>
                        </div>
                    </div>
                </div>
            }
            <hr />
            <div className='px-20 mt-15 mb-25 py-10'>
                <h3 className='before:bg-red-500 before:absolute relative before:content-[""] before:h-[150%]
                before:w-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>
                    Categories</h3>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl font-semibold'>Browse By Category</h1>
                    <div className='flex gap-20'>
                        <button onClick={() => { handlePrev() }} className='bg-gray-200 p-3 font-extrabold
                             hover:bg-gray-300 cursor-pointer rounded-full'>&lt;&lt;</button>
                        <button onClick={() => { handleNext() }} className='bg-gray-200 p-3 font-extrabold
                             hover:bg-gray-300 cursor-pointer rounded-full'>&gt;&gt;</button>
                    </div>
                </div>
                <div className="gap-20 mt-10 w-full grid grid-cols-5">
                    {visible_categories.map((query) => (
                        <Link to={`/product-category/${query.category}`} key={query.id}><div className='border-2 cursor-pointer hover:scale-[1.02] delay-75 py-10 rounded-2xl flex flex-col 
                            justify-center transition-all ease-linear gap-3 items-center' >
                            <i className={`${query.class} text-6xl`}></i>
                            <h2 className='text-2xl'>{query.name}</h2>
                        </div></Link>
                    ))}
                </div>

            </div>
            <hr />
            <div className='px-20 py-10'>
                <h3 className='before:bg-red-500 before:absolute relative before:content-[""] before:h-[150%]
                before:w-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>
                    This Month's</h3>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>Best Selling Products</h2>
                    <button className='text-white bg-red-400 py-3 px-5 rounded-lg hover:bg-red-500 
                    cursor-pointer delay-75 transition-all'>View all</button>
                </div>
                {loading ? <p className='text-center text-3xl'>Loading...........</p> :
                    <div className='p-7 grid grid-cols-5 gap-10'>
                        {best_selling.map((product) => (
                            <div key={product.id}><ProductCard product={product} /></div>
                        ))}
                    </div>
                }
            </div>

            <div className='w-full bg-[banner_10] bg-cover bg-center'>

            </div>

            <div className='px-20 py-10'>
                <h3 className='before:bg-red-500 before:absolute relative before:content-[""] before:h-[150%]
                before:w-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>
                    Our Products</h3>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>Explore Our Prroducts</h2>
                    <button className='text-white bg-red-400 py-3 px-5 rounded-lg hover:bg-red-500 
                    cursor-pointer delay-75 transition-all'>View all Products</button>
                </div>
                {loading ? <p className='text-center text-3xl'>Loading.......</p> :
                    <div className='p-7 grid grid-cols-5 gap-10'>
                        {our_products.map((product) => (
                            <div key={product.id}><ProductCard product={product} /></div>
                        ))}
                    </div>
                }
            </div>

            <div className='px-20 py-10'>
                <h3 className='before:bg-red-500 before:absolute relative before:content-[""] before:h-[150%]
                before:w-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>
                    Featured</h3>
            </div>
        </>
    )
}

export default Home