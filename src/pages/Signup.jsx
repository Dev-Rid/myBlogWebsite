import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='primary min-h-screen flex justify-center items-center border-2 pt-12'>
        <div className=''>
            <div className=''>
                <h2 className='text-xl md:text-2xl text-bold text-center text-gray-600'>Create An Account</h2>
            </div>
            <div className=' mt-5'>
                <form action="" className='mb-20 gap-4 flex flex-col'>
                    <div className='w-full justify-center flex container'>   
                        <input type="text" placeholder='Full Name' className='border-3 px-[0.5rem]  md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div className='w-full justify-center flex container'>
                        <input type="text" placeholder='Email' className='border-3 px-[0.5rem] h-[2.4rem] md:w-[23rem] sm:w-[21rem] w-[16rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div className='w-full justify-center flex container'>
                        <input type="text" placeholder='Password' className='border-3 px-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div className='w-full justify-center flex container'>
                        <input type="text" placeholder='Confirm Password' className='border-3 px-[0.5rem] md:w-[23rem] sm:w-[21rem] w-[16rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>

                    <div className='font border-2 px-[5rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray items-center text-white textbold text-2xl'>
                        <Link to="/login" classame=''>
                            Sign Up
                        </Link>
                    </div>
                    <div>
                        <p className='text-center text-gray-600'>Already have an account? <br /> <Link to="/login" className='underline'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup