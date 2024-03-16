import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import './profile.scss'
import Posts from '../../components/Posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
      <img src="https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover' />
        <img src="https://images.pexels.com/photos/9274099/pexels-photo-9274099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='profilePic' />
        
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="">
              <FacebookOutlinedIcon/>
            </a>
            <a href="">
              <InstagramIcon/>
            </a>
            <a href="">
              <XIcon/>
            </a>
            <a href="">
              <LinkedInIcon/>
            </a>
            <a href="">
              <EmailOutlinedIcon/>
            </a>
            <a href="">
              <PinterestIcon/>
            </a>
          </div>
          <div className="center">
            <span>Honson</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Mdk.dev</span>

              </div>
              
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        
      </div>
      <Posts/>
    </div>
  )
}

export default Profile