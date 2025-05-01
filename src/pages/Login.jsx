import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='primary min-h-screen flex justify-center items-center border-2 pt-10 '>
      <div className=''>
        <div>
          <h2 className='text-3xl text-bold text-center text-gray-600'>Welcome Back!</h2>
        </div>
        <div>
          <form action=""className='mb-20 mt-10 gap-4 flex flex-col'>
            <div>
              <input type="text" placeholder='Email' className='border-3 px-[0.5rem] py-[0.5rem] w-[21.42rem] rounded-[0.3rem] border-gray '/>
            </div>
            <div>
              <input type="text" placeholder='Password' className='border-3 px-[0.5rem] py-[0.5rem] w-[21.42rem] rounded-[0.3rem] border-gray items-start'/>
            </div>

            <button className='border-2 px-[8rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray items-center text-white text-bold text-2xl'>
              Login
            </button>
            <div>
              <p className='text-center text-gray-600'>Forgot password?</p>
            </div>
            <div>
              <p className='text-center text-gray-600'>Don't have an account yet? <br /> <Link to="/register" className='underline'>Sign Up</Link></p>
            </div>
          </form>
        </div>    
      </div>
    </div>

  )
}

export default Login