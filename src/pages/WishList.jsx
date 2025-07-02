import ProductCard from '../components/ProductCard'
import { useWishlist } from '../contexts/wishListContext'

function WishList() {

  const { wishlistItems, wishListCounts } = useWishlist()
  return (

    <div className='px-20 py-10'>
      <h1 className='text-6xl font-bold text-center'>Wish Lists: { wishListCounts } Items</h1>
      <div className='grid grid-cols-5 gap-10 bg-gray-100 my-20 p-10 rounded-3xl'>
        {wishlistItems.map((item) => (
          <div key={ item.id }><ProductCard product={ item } /></div>
        ))}
      </div>
    </div>
  )
}

export default WishList
