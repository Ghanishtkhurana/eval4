import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const getPost = async()=>{
    const res = await axios.get("http://localhost:8080/posts")
    return res
}

const Post = () => {
    const [post,setPost] = useState([])

    useEffect(()=>{
        handleThefetch()
    },[])
    const handleThefetch = ()=>{
        getPost().then((res)=>console.log(res.data))
    }
  return (
    <div>
      {
        post.map((post)=><div>
            <h1>1</h1>
        </div>)
      }
    </div>
  )
}

export default Post
