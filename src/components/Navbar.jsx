import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div >
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/sign"}>Sign-In</Link>
        <Link to={"/posts"}>Post</Link>
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </div>
  )
}

export default Navbar
