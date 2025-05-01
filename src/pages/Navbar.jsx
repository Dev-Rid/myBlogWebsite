import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b-2 border-gray-400 h-18 shadow-sm'>
        <div className='flex justify-between items-center p-4'>
            <div className='ml-12'>
                <h2 className='text-2xl text-bold'>My Blog</h2>
            </div>
            
            <div className='flex gap-4 mr-12'>
                <Link to="/login">Login</Link>

                <Link to="/register" className='border-2 border-gray-500 rounded px-3 h-7 bg-gra-400'>Sign up</Link>            
            </div>
        </div>
    </div>
  )
}

export default Navbar