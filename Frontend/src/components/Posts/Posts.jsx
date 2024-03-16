import React from 'react'
import './posts.scss'
import Post from '../Post/Post'
const Posts = () => {

    const Posts=[
        {
            id:1,
            name:"Jonathan",
            userId:1,
            profilePic:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"This is a description of my post",
            img:"https://images.pexels.com/photos/18672590/pexels-photo-18672590/free-photo-of-people-reading-books-in-boston-public-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            name:"Irshad",
            userId:3,
            profilePic:"https://images.pexels.com/photos/18095751/pexels-photo-18095751/free-photo-of-young-man-sitting-on-the-ground-at-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"This is a description of my post",
            img:"https://images.pexels.com/photos/20448105/pexels-photo-20448105/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
    ]
  return (
    <div className='posts'>
        {Posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts