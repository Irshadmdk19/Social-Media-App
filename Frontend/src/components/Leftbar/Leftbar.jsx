import React, { useContext } from 'react'
import './leftbar.scss'
import friends from '../../assets/friends.png'
import marketplace from '../../assets/marketplace.png'
import memories from '../../assets/question.png'
import group from '../../assets/group.png'
import watch from '../../assets/watch-movie.png'
import { AuthContext } from '../../context/authContext'

const Leftbar = () => {
  const{currentUser}= useContext(AuthContext);
  return (
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <img src={friends} alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={group} alt="" />
                    <span>Groups</span>
                </div>
               
                <div className="item">
                    <img src={marketplace} alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src={watch} alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Your Shortcuts</span>
            <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>
                <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>

            </div>
            <hr />

            <div className="menu">
                <span>Others</span>
            <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>
                <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>
                <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories</span>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Leftbar