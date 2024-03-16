import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext'

const Stories = () => {
    const currentUser= useContext(AuthContext)
const stories=[
    {
    id:1,
    name:"Jojo",
    img:"https://images.pexels.com/photos/17850754/pexels-photo-17850754/free-photo-of-buildings-around-narrow-canal-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
    },
    {
        id:1,
        name:"Jojo",
        img:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
        },
        {
            id:1,
            name:"Jojo",
            img:"www.com",
            
            }

]
  return (
    <div className='stories'>
        <div className='story'>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>

            </div>
        {stories.map(story=>(
            <div className='story' key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>

            </div>
        ))}

    </div>
  )
}

export default Stories