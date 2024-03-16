import React, { useContext } from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import './style.scss'
import { AuthContext } from './context/authContext';


const App = () => {
  const {currentUser}=useContext(AuthContext);

  const Layout=()=>{
    return(
      <div classname="theme-dark">
        <Navbar/>
        <div style={{display:'flex'}}>
          <Leftbar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/> 
    }
    return children
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
       
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  
  
  return (
    <div>
       <RouterProvider router={router} />
      
    </div>
  )
}

export default App