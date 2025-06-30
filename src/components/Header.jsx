import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
  return (
    <nav className='py-5 px-32 flex justify-between sticky left-0 gap-15 items-center border-b-2 border-gray-500'>
      <div>
        <h1 className='text-3xl font-bold border-b-2'>Exclusive</h1>
      </div>
      <div className='flex justify-between items-center gap-25'>
        <Link to="/"><a className='hover:border-b-2'>Home</a></Link>
        <Link to=""><a className='hover:border-b-2'>Contact</a></Link>
        <Link to=""><a className='hover:border-b-2'>About</a></Link>
        <Link to=""><a className='hover:border-b-2'>Sign up</a></Link>
      </div>

      <div className='flex justify-between items-center gap-7'>
        <div className='bg-gray-100 h-10 flex items-center px-2 justify-between w-[20vw]'>
            <input className='text-xs flex-1 outline-none font-mono h-full' type="text" placeholder='What are you looking for?' />
            <button>
            <i class='transition-all delay-75 ease-linear cursor-pointer hover:bg-gray-300 p-2 rounded-full bx bx-search' ></i>
            </button>
        </div>
        <button><i class='text-2xl relative hover:text-gray-400 hover:scale-115 bx bx-heart'>
          <span className='absolute text-lg right-[-6px] top-[-15px]'>0</span>
          </i>
        </button>
        <button><i class='text-2xl relative hover:text-gray-400 bx bx-cart hover:scale-115' >
          <span className='absolute text-lg right-[-6px] top-[-15px]'>0</span>
          </i>
        </button>
        <button><i class='text-2xl relative hover:text-gray-400 bx bx-user hover:scale-115'></i></button>
      </div>
    </nav>
  )
}

export default Header
