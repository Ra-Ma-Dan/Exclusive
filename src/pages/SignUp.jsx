import { Link } from 'react-router-dom'
import image from '../assets/images/saleImgOne.webp'

function SignUp() {
  return (
    <div>
      <div className='gap-40 pr-20 py-30 grid grid-cols-2'>
        <div><img src={image} alt="Alt" /></div>
        <div className='w-full h-full text-center'>
          <h2 className='text-4xl font-bold'>Create an Account</h2>
          <p className='text-xl my-2'>Enter Your Details Below</p>
          <form action="/login">
            <div className='w-full my-10'>
              <div className='h-20'>
                <input required className='text-lg p-2 outline-none border-b-2 w-full' type="text" placeholder='Name' /></div>
              <div className='h-20'>
                <input required className='text-lg p-2 outline-none border-b-2 w-full' type="text" placeholder='Email or Phone number' /></div>
              <div className='h-20'>
                <input required className='text-lg p-2 outline-none border-b-2 w-full' type="password" placeholder='Password' /></div>
              <button className=' cursor-pointer hover:bg-red-400 delay-75 transition-all ease-in-out w-full bg-red-300 py-5 text-2xl font-semibold'>Create Account</button>
            </div>
          </form>
          <button className='border-4 w-full hover:border-gray-500 font-semibold delay-75 transition-all ease-in-out
            cursor-pointer rounded-2xl text-2xl flex hover:text-gray-500 items-center justify-center gap-3 p-5'>
            <i className='text-4xl bx bxl-google'></i>Sign up with Google</button>
          <div>
            <p className='flex justify-center items-center my-3 gap-2 text-3xl'>Already have an account?
              <Link to="/login" className='cursor-pointer'><span 
              className='font-bold underline hover:text-gray-500 delay-75 transition-all ease-in-out'>Log in</span></Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp
