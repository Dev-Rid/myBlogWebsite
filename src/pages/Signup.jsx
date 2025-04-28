import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div>
            <h2>Create An Account</h2>
        </div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Passowrd</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Confirm Passoword</label>
                    <input type="text" />
                </div>
                <div>
                    <button>Sign up</button>
                    <p>Already have an account <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup