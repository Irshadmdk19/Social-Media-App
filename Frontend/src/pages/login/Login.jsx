import React, { useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
const Login = () => {
    
  const{login}=useContext(AuthContext);
  const handleLogin=()=>{
    login();
  }
    
  return (

    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Welcome Back!!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rem omnis incidunt hic tenetur, nemo quam repudiandae facilis voluptatibus vitae maxime deleniti, unde, error consectetur ullam sint ab quos libero!</p>
                <span>Dont u have an account</span>
                <Link to="/register">
            <button>Register</button>
        </Link>

            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" placeholder='Enter username' id='username' />
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" placeholder='Enter password' id='password' />
                    <button onClick={handleLogin}>Login</button>

                </form>


            </div>
        </div>

    </div>
  )
}

export default Login