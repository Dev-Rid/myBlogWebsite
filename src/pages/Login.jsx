import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div>
        <h2>Welcome Back!</h2>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>

          <button>
            Login
          </button>
          <p>Don't have an account yet <Link to="/register">Sign Up</Link></p>
        </form>
      </div>
    </div>

  )
}

export default Login