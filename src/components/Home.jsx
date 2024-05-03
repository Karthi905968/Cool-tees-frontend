import React from 'react'
import { PostForm } from './PostForm'
import { Posts } from './Posts'
export const Home = () => {
  return (
    <div className='Home'>
       <PostForm/>
       <Posts/>
    </div>
  )
}
