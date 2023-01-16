import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/auth/auth.action";

const initState = {
  email: "",
  password: ""
};

const Login = () => {
  const {isAuth,token} = useSelector((store)=>store.auth)
  const dispatch = useDispatch()
  const [formstate, setFormstate] = useState(initState);
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuth){
        alert("login success")
        navigate("/notes")
    }
  },[isAuth])

  const handleTheChange = (e) => {
      setFormstate({ ...formstate, [e.target.name]: e.target.value });
    };
    const handleTheSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formstate))
        console.log("hi");
    };
    console.log(isAuth,token);
    console.log(formstate);
  return (
    <div>
      <div>
        <h3>Login</h3>
        <div>
          <form action="" onSubmit={handleTheSubmit}>
            <input type="text" name="email"
            onChange={handleTheChange} placeholder="Enter your email" />
            <br />
            <input
              type="text"
              name="password"
              onChange={handleTheChange}
              placeholder="Enter you password"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;



