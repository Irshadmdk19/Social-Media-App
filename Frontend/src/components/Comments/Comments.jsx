import React, { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'
const Comments = () => {
    const {currentUser}= useContext(AuthContext);

   const comments=[
    {
        id:1,
        name:"Irshad",
        userId:3,
        profilePic:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"This is a description of my post lorem sjhdj thujjs dnxdjasdkasjhdkjashdkas dasjdnaskjdnkasjhdkjashdjkasndkjasnjdksa dsajdbnasjkhdjksand sadkasndk",
        img:"https://images.pexels.com/photos/20448105/pexels-photo-20448105/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:2,
        name:"Sanjay",
        userId:3,
        profilePic:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"This is a description of my post",
        img:"https://images.pexels.com/photos/20448105/pexels-photo-20448105/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:3,
        name:"Padmaraja",
        userId:5,
        profilePic:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"This is a description of my post",
        img:"https://images.pexels.com/photos/20448105/pexels-photo-20448105/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }
   ] 
  return (
    
    <div className='comments'>
        <div className='write'>
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className='comment'>
                <img src={comment.profilePic} alt="" />
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>

                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments