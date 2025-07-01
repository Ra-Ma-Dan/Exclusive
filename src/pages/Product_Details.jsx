import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../contexts/productContext'



function ProductDetails() {
    const { fetchProductsInfo, productInfo, loading } = useProduct()
    const { id } = useParams()

    const [productImages, setProductImages] = useState([])


    useEffect(() => {
        fetchProductsInfo(id)
        console.log("Products Info Fetched and Distributed");
    }, [id])

    useEffect(() => {


        if (!productInfo.images) {
            setProductImages([])
            return
        }
        
        const imgs = [...productInfo.images]


        if (imgs.length === 1) {
            setProductImages([imgs[0], imgs[0], imgs[0], imgs[0]])
        } else if (imgs.length === 2) {
            setProductImages([imgs[0], imgs[1], imgs[0], imgs[1]])
        } else if (imgs.length === 3) {
            setProductImages([imgs[0], imgs[1], imgs[2], imgs[0]])
        } else {
            setProductImages(imgs)
        }
    }, [productInfo])


    if (loading) return <p>Loading..................</p>

    if (!productInfo) {
        return (
            <div>
                <p className='text-6xl font-bold'>Unable to Fetch Info the Product</p>
                <button className='text-2xl font-bold py-5 px-10'>Go back to Shop</button>
            </div>
        )
    }

    useEffect(() => {
        console.log("Running  after 1");
        console.log(productInfo);


        if (!productInfo.images) {
            setProductImages([])
            console.log("No Image", productInfo);
            return
        }
        console.log("From Product Info", productInfo.images);
        const imgs = [...productInfo.images]
        console.log("From imgs", imgs);
        console.log("Images Fetched and Distributed");


        if (imgs.length === 1) {
            setProductImages([imgs[0], imgs[0], imgs[0], imgs[0]])
        } else if (imgs.length === 2) {
            setProductImages([imgs[0], imgs[1], imgs[0], imgs[1]])
        } else if (imgs.length === 3) {
            setProductImages([imgs[0], imgs[1], imgs[2], imgs[0]])
        } else {
            setProductImages(imgs)
        }
    }, [productInfo])


    if (loading) return <p>Loading..................</p>

    if (!productInfo) {
        return (
            <div>
                <p className='text-6xl font-bold'>Unable to Fetch Info the Product</p>
                <button className='text-2xl font-bold py-5 px-10'>Go back to Shop</button>
            </div>
        )
    }


    return (
        <div className='px-20'>
            <h1 className='text-6xl font-semibold text-center my-10'>{productInfo.title}</h1>
            <div className='w-full p-2 mb-20'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-2 h-full flex flex-col gap-5'>
                        <div className='bg-gray-200'><img src={productImages[3]} alt={productInfo.id} /></div>
                        <div className='bg-gray-200'><img src={productImages[1]} alt="1" /></div>
                        <div className='bg-gray-200'><img src={productImages[2]} alt="2" /></div>
                    </div>
                    <div className='col-span-5 bg-gray-100'>
                        <img src={productImages[0]} alt="3" />
                    </div>
                    <div className='col-span-5 flex flex-col justify-between p-10 bg-amber-200'>
                        <h2 className='text-3xl text-center'>{productInfo.title}</h2>
                        <p className='text-6xl font-bold text-center'>${productInfo.price}</p>
                        <p className='font-sans text-lg'>{productInfo.description}</p>
                        <hr />
                        <button className='bg-black text-white py-6 font-bold text-2xl hover:bg-gray-700
                        cursor-pointer delay-75 transition-all ease-linear rounded-3xl'>Add to cart</button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='before:bg-red-500 before:absolute relative before:content-[""] before:h-[150%]
                before:w-4 text-3xl before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:left-[-20px]'>
                    More Products</h3>

            </div>
        </div>
    )
}

export default ProductDetails
