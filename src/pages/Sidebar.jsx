import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 p-4 h-full primary shadow-md'>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
