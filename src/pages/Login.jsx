// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//     <div className='primary min-h-screen flex justify-center items-center border-2 pt-10 '>
//       <div className=''>
//         <div>
//           <h2 className='textColor text-3xl text-bold text-center text-gray-600'>Welcome Back!</h2>
//         </div>
//         <div>
//           <form action=""className='mb-20 mt-10 gap-4 flex flex-col'>
//             <div className='w-full justify-center flex container'>
//               <input type="text" placeholder='Email' className='border-3 px-[0.5rem] py-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] rounded-[0.3rem] border-gray '/>
//             </div>
//             <div className='w-full justify-center flex container'>
//               <input type="text" placeholder='Password' className='border-3 px-[0.5rem] py-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] rounded-[0.3rem] border-gray items-start'/>
//             </div>

//             <div className='font border-2 px-[5rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray item-center text-white textbold text-2xl'>
//               <Link to="/dashboard" className=''>
//                   Login
//               </Link>
//             </div>

//             <div>
//               <p className='text-center text-gray-600'>Forgot password?</p>
//             </div>
//             <div>
//               <p className='text-center text-gray-600'>Don't have an account yet? <br /> <Link to="/register" className='underline'>Sign Up</Link></p>
//             </div>
//           </form>
//         </div>    
//       </div>
//     </div>

//   )
// }

// export default Login















import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login submitted:', formData);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password clicked');
  };

  const handleSignUpClick = () => {
    // Handle navigation to sign up page
    console.log('Navigate to sign up');
  };

  return (
    <div className="min-h-screen primary flex items-center justify-center p-4">
      <div className="primary rounded-2xl border-2 border-gray-300 p-8 w-full max-w-md shadow-sm">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-400 rounded-lg px-8 py-4 text-gray-700 font-medium text-lg">
            LOGO
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-300 text-center mb-8">
          Welcome Back
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
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
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Login Button */}
          <div className="pt-4">
            < Link
               to="/dashboard"
              className="block w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"  
            >
              Login
            </  Link>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <Link
            to="/dashboard"
            onClick={handleForgotPassword}
            className="text-blue-700 hover:text-blue-800 text-lg underline focus:outline-none"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-lg textColor">
            Don't have an account?{' '}
              <Link
                to="/register" 
                onClick={handleSignUpClick}
                className="text-gray-700 hover:text-gray-900 font-medium underline focus:outline-none"
              > <span className='text-blue-700 underline active:text-blue-800'>Sign Up</span>
              </Link>
          </p>
        </div>
      </div>
    </div>
  );
}