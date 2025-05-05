import React from 'react'
import Navbar from './Navbar'
// import { Outlet } from 'react-router-dom'


const Homepage = () => {
  return (
    <div>
      <div> 
        <div>
          <Navbar/>
            <div className='flex flex-col justify-center items-center gap-2 mt-18'>
              <h1 className='homePage text-3xl sm:text-5xl md:text-6xl  text-gray-800 '>Welcome to My Blog</h1>
              <p className='text-gray-500 text-md sm:text-2xl md:text-3xl'>This is a simple blog application.</p>
            </div>
        </div>
      </div>

   
    </div>
  )
}

export default Homepage