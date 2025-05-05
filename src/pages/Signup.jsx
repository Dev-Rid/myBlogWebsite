import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='primary min-h-screen flex justify-center items-center border-2 pt-12'>
        <div className=''>
            <div className=''>
                <h2 className='text-2xl text-bold text-center text-gray-600'>Create An Account</h2>
            </div>
            <div className=' mt-5'>
                <form action="" className='mb-20 gap-4 flex flex-col'>
                    <div>
                        <input type="text" placeholder='Full Name' className='border-3 px-[0.5rem] py[0.5rem] w-[21.42rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Email' className='border-3 px-[0.5rem] py[0.5rem] h-[2.4rem] w-[21.42rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Password' className='border-3 px-[0.5rem] py[0.5rem] w-[21.42rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Confirm Password' className='border-3 px-[0.5rem] py[0.5rem] w-[21.42rem] h-[2.4rem] rounded-[0.3rem] border-gray'/>
                    </div>
                    <div className='border-2 px-[8rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray items-center text-white textbold text-2xl'>
                        <Link to="/login" classame='border-2 px-[8rem] py-[0.5rem] rounded-[0.3rem] border-gray-400 bg-gray bg-gray items-center text-white text-bold text-2xl'>
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