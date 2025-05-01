import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='primary min-h-screen flex justify-center items-center border-2 pt-2'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-6xl text-gray-800'>404</h1>
        <h2 className='text-4xl text-gray-700'>Page Not Found</h2>
        <p className='text-gray-500'>The page you are looking for could not be found.</p>
        <Link to="/homepage" className='px-10 py-[0.5rem] bg-gray-500 rounded-3xl text-white text-xl'>Go back to Homepage</Link>
        {/* <p>Or check out our <a href="/contact">Contact</a> page for assistance.</p> */}
      </div>
    </div>
  )
}

export default NotFound