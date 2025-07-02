import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-black px-10 text-white py-10'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl underline'>Exclusive</h2>
                    <p className='text-sm'>Subscribe</p>
                    <p className='text-sm'>Get 10% off your first Order</p>
                    <div className='flex items-center justify-center border-2 p-2 rounded-lg'>
                        <input type="email" className='placeholder:text-sm outline-none pl-2'
                            name="email" placeholder='Enter Your Email' />
                        <i class='hover:bg-gray-200 hover:text-black transition-all cursor-pointer
                    delay-75 ease-in-out text-2xl p-1 rounded-lg bx bx-send'></i>
                    </div>
                </div>
                <div className='flex items-start flex-col gap-3'>
                    <h2 className='text-3xl'>Support</h2>
                    <p className='text-sm'>Usmanu Danfodiyo University Sokoto</p>
                    <p className='text-sm'>udus@udusok.edu.ng</p>
                    <p className='text-sm'>+234-9009-2343-3345</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold underline'>Account</h2>
                    <p className='text-sm'>My Account</p>
                    <p className='text-sm'>
                     <Link to='/login'>   Login </Link>
                         / 
                    <Link to='/signup'>Register</Link>
                    </p>
                    <Link to='/cart'><p className='text-sm'>Cart</p></Link>
                    <Link to='/wishlist'><p className='text-sm'>Wishlist</p></Link>
                    <Link to='/shop'><p className='text-sm'>Shop</p></Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl'>Quick Link</h2>
                    <p className='text-sm'>Privacy Policy</p>
                    <p className='text-sm'>Terms Of Use</p>
                    <p className='text-sm'>FAQ</p>
                    <p className='text-sm'>Contact</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2>Download App</h2>
                    <span>save $3 with App New User Only</span>
                    <div className='text-white flex'>
                        <i className='bx-bx-facebook'></i>
                        <i className='bx-bx-instagram'></i>
                        <i className='bx-bx-facebook'></i>
                        <i className='bx-bx-facebook'></i>
                    </div>
                </div>
            </div>
            <p className='my-3 text-center text-white'>Copyright Exclusive 2025 || All Right Reserved</p>
        </footer>
    )
}

export default Footer
