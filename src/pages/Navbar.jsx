// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='border-b-2 border-gray-400 h-18 shadow-sm'>
//         <div className='flex justify-between items-center p-5 lg:p-5'>
//             <div className='-ml-2 md:ml-2 lg:ml-4'>
//                 <h2 className='text-lg md:text-2xl text-bold'>My Blog</h2>
//             </div>
            
//             <div className='flex gap-4 mr-2 lg:mr-4'>
//                 <Link to="/login">Login</Link>

//                 <Link to="/register" className='border-2 border-gray-500 rounded px-3 h-7 bg-gra-400'>Sign up</Link>            
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <div className='border-b-2 border-gray-400 h-18 shadow-sm relative z-20'>
        <div className='flex justify-between items-center p-5 lg:p-5'>

          {/* Left: Blog Title */}
          <div className='ml-2 lg:ml-4'>
            <h2 className='myBlogLogo text-lg md:text-2xl font-bold'>My Blog</h2>
          </div>

          {/* Right: Links and Hamburger */}
          <div className='flex items-center gap-4 mr-2 lg:mr-4'>
            {/* Login/Signup (only on md and up) */}

            <div className='hidden md:flex gap-4'>
              <Link to="/login">Login</Link>
              <Link to="/register" className='border-2 border-gray-500 rounded px-3 h-7 bg-gray-200'>
                Sign up
              </Link>
            </div>

            <button className='hidde' onClick={toggleSidebar}>
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </div>

      {/* Sidebar Slide-in (Mobile Only) */}
      <div className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <Sidebar />
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-40 z-10 lg:hidden'
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
