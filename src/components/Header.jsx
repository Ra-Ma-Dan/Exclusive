import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/wishListContext'
import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  const { cartItemsCount } = useCart()
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { wishListCounts } = useWishlist()



  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery(searchParams.get('q') || '')
    } else {
      setQuery('')
    }
  }, [location, searchParams])

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }


  return (
    <nav className='py-5 px-32 flex justify-between sticky z-10 top-0 bg-white left-0 gap-15 items-center border-b-2 border-gray-500'>
      <div>
        <h1 className='text-3xl font-bold border-b-2'>Exclusive</h1>
      </div>
      <div className='flex justify-between items-center gap-25'>
        <Link to="/"><p className='hover:border-b-2'>Home</p></Link>
        <Link to="/shop"><p className='hover:border-b-2'>Shop</p></Link>
        <Link to=""><p className='hover:border-b-2'>Contact</p></Link>
        <Link to=""><p className='hover:border-b-2'>About</p></Link>
        <Link to=""><p className='hover:border-b-2'>Sign up</p></Link>
      </div>

      <div className='flex justify-between items-center gap-7'>
        <form onSubmit={handleSearch}>
          <div className='bg-gray-100 h-10 flex items-center px-2 justify-between w-[20vw]'>
            <input onChange={(e) => setQuery(e.target.value)} value={query}
              className='text-xs flex-1 outline-none font-mono h-full'
              type="text" placeholder='What are you looking for?' />
            <button type='submit'>
              <i class='transition-all delay-75 ease-linear cursor-pointer hover:bg-gray-300 p-2 rounded-full bx bx-search' ></i>
            </button>
          </div>
        </form>
        <Link to="/wishlist"><button>
          <i class='text-2xl relative hover:text-gray-400 hover:scale-115 bx bx-heart'>
            <span className='absolute text-red-600 text-lg right-[-6px] top-[-15px]'>{ wishListCounts }</span>
          </i></button></Link>
        <Link to="/cart"><button>
          <i class='text-2xl relative hover:text-gray-400 bx bx-cart hover:scale-115' >
            <span className='absolute text-red-500 text-lg right-[-6px] top-[-15px]'>{ cartItemsCount }</span>

          </i></button> </Link>
        <button><i class='text-2xl relative hover:text-gray-400 bx bx-user hover:scale-115'></i></button>
      </div>
    </nav>
  )
}

export default Header
