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
              <h1 className='text-5xl text-gray-800 '>Welcome to My Blog</h1>
              <p className='text-gray-500 text-xl'>This is a simple blog application.</p>
            </div>
        </div>
      </div>

   
    </div>
  )
}

export default Homepage