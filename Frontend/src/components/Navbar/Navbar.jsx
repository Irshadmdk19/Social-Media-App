import React, { useContext, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './navbar.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
const Navbar = () => {
  const{currentUser}=useContext(AuthContext)
    
  return (
   
    <div className='navbar'>
        <div className='left'>
           <Link to="/" style={{textDecoration: "none"}}>
           <span> MDK.dev</span>
           </Link>
           <HomeOutlinedIcon />
           <ModeNightOutlinedIcon/>
           <GridViewOutlinedIcon/>
         
           <div className='search'>
           <SearchOutlinedIcon/>
            <input type="text" placeholder='search' />
           </div>

        </div>


        <div className='right'>
            <MarkEmailUnreadOutlinedIcon/>
            <NotificationsActiveOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <div className='user'>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>

            </div>
        </div>

    </div>
  )
}

export default Navbar