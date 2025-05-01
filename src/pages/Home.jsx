import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='primary min-h-screen'> 
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home