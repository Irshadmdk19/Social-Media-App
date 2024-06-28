import React, { useState } from 'react'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import  axios from 'axios';

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
    name:"",
    email:""
  })

  const [err, setErr] = useState(null)
  const navigate = useNavigate()  
  const handleChange=(e)=>{
    setInputs(prev=>({
        ...prev,[e.target.name]:e.target.value}))
  }
  console.log(inputs)

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
        await axios.post("http://localhost:8800/api/auth/register",inputs)
        navigate("/login");

    }
    catch(err){
        setErr(err.response.data)
        

    }
    
 
  }
  console.log(err)
  

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
                
                <input type="text" placeholder='Enter username' id='username' name='username' onChange={handleChange} required />
                <input type="text" placeholder='Enter Name' id='name' name='name' onChange={handleChange} required/>
                <input type="text" placeholder='Enter Email' id='email' name='email' onChange={handleChange} required />
                
                <input type="password" placeholder='Enter password' id='password' name='password' onChange={handleChange} required />
                <button onClick={handleSubmit}>Register</button>
                {err && err}

            </form>


        </div>
    </div>

</div>
  )
}

export default Register