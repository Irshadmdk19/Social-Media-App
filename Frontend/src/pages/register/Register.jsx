import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <div className='register'>
    <div className="card">
        <div className="left">
            <h1>LAMA Register</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rem omnis incidunt hic tenetur, nemo quam repudiandae facilis voluptatibus vitae maxime deleniti, unde, error consectetur ullam sint ab quos libero!</p>
            <span>Do u have an account</span>
        <Link to="/login">
            <button>Login</button>
        </Link>
            

        </div>
        <div className="right">
            <h1>Register</h1>
            <form action="">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" placeholder='Enter username' id='username' />
                <input type="text" placeholder='Enter Name' id='username' />
                <input type="text" placeholder='Enter Email' id='username' />
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" placeholder='Enter password' id='password' />
                <button>Register</button>

            </form>


        </div>
    </div>

</div>
  )
}

export default Register