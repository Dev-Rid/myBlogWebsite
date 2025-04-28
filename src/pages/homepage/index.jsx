import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <nav>Logo</nav> */}
      <Outlet/>
    </div>
  )
}

export default Home