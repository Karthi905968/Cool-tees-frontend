import React, { useState } from 'react'

export const PostForm = () => {

  const [name,setName]=useState()
  const [body,setBody]=useState()
  const [image,setImage]=useState()

  const NameHandler = (e)=>{
     setName(e.target.value)
  }

  const BodyHandler = (e)=>{
    setBody(e.target.value)
 }

 const ImageHandler = (e)=>{
  setImage(e.target.files[0])
}

const HandleSubmit = (e)=> {
   e.preventDefault()
   console.log(name);
   console.log(body);
   console.log(image);
}


  return (
    <div className='post-form' method='post'>
        <h1 className='heading1'>Post-Forum</h1><br />
        <form action="#" onSubmit={HandleSubmit}>
            <input type="text" placeholder='Enter your name' required name='' id='name' onChange={NameHandler}/><br />
            <textarea name="body" id="body" placeholder='Tell us something!' onChange={BodyHandler}></textarea><br />
            <input type="file" id='image-filed' onChange={ImageHandler}/><br />
            <input type="submit" />
            <br />
        </form>
    </div>
  )
}
