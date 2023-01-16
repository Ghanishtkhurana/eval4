import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Post from './Post'
import Sign from './Sign'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
      <Route path='/posts' element={<Post/>} />
    </Routes>
  )
}

export default AllRoutes
