import React, { useContext, useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
    
  })

  const [err, setErr] = useState(null)

  const  navigate= useNavigate();
  
  const handleChange=(e)=>{
    setInputs(prev=>({
        ...prev,[e.target.name]:e.target.value}))
  }
  console.log(inputs)
    
  const{login}=useContext(AuthContext);

  const handleLogin= async(e)=>{
    e.preventDefault();
    try{
      await login(inputs)
      navigate("/")

    }
    catch(err){
      setErr(err.response.data)
    }
    
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
                    
                    <input type="text" placeholder='Enter username' id='username' name='username'
                    onChange={handleChange} />
                    
                    <input type="password" placeholder='Enter password' id='password' name='password'
                    onChange={handleChange} />
                    
                    <button onClick={handleLogin}>Login</button>
                    {err && err}
                </form>


            </div>
        </div>

    </div>
  )
}

export default Login