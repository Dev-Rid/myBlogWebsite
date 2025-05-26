// import React from 'react'
// import { Link } from 'react-router-dom'

// const Signup = () => {
//   return (
//     <div className='primary min-h-screen flex justify-center items-center border-2 pt-12'>
//         <div className=''>
//             <div className=''>
//                 <h2 className='textColor text-xl md:text-2xl text-bold text-center text-gray-600'>Create An Account</h2>
//             </div>
//             <div className=' mt-5'>
//                 <form action="" className='mb-20 gap-4 flex flex-col'>
//                     <div className='w-full justify-center flex containe'>   
//                         <input type="text" placeholder='Full Name' className='primaryTwo border-3 px-[0.5rem]  md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
//                     </div>
//                     <div className='w-full justify-center flex containe'>
//                         <input type="text" placeholder='Email' className='border-3 px-[0.5rem] h-[2.4rem] md:w-[23rem] sm:w-[21rem] w-[16rem] rounded-[0.3rem] border-gray'/>
//                     </div>
//                     <div className='w-full justify-center flex containe'>
//                         <input type="text" placeholder='Password' className='border-3 px-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
//                     </div>
//                     <div className='w-full justify-center flex containe'>
//                         <input type="text" placeholder='Confirm Password' className='border-3 px-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
//                     </div>

//                     <div className='font border-2 px-[5rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray items-center text-white textbold text-2xl'>
//                         <Link to="/login" classame=''>
//                             Sign Up
//                         </Link>
//                     </div>
//                     <div>
//                         <p className='text-center text-gray-600'>Already have an account? <br /> <Link to="/login" className='underline'>Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Signup




















import React, { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleLoginClick = () => {
    // Handle navigation to login page
    console.log('Navigate to login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 w-full max-w-md shadow-sm">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-400 rounded-lg px-8 py-4 text-gray-700 font-medium text-lg">
            LOGO
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Create Your Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-4 px-4 rounded-xl text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-lg">
            Already have an account?{' '}
            <button
              onClick={handleLoginClick}
              className="text-gray-700 hover:text-gray-900 font-medium underline focus:outline-none"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}