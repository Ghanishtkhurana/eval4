import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const initState = {
  name: "",
  email: "",
  gender: "",
  password: "",
};

const subData = async(fromstate) => {
    const res = await axios.post("http://localhost:8080/users/register",fromstate)
    return res
};

const Sign = () => {
  const [formstate, setFormstate] = useState(initState);
  const navigate = useNavigate()
  const handleTheChange = (e) => {
    setFormstate({ ...formstate, [e.target.name]: e.target.value });
  };
  const handleTheSubmit = (e) => {
    e.preventDefault();
    subData(formstate).then((res)=>console.log(res))
    console.log(formstate);
  };
  return (
    <div>
      <div style={{}}>
        <h3>Sign-In</h3>
        <form onSubmit={handleTheSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleTheChange}
            placeholder="Enter you name"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={handleTheChange}
            placeholder="Enter you email"
          />
          <br />
          <input
            type="text"
            name="gender"
            onChange={handleTheChange}
            placeholder="Enter you gender"
          />
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
  );
};
<br />

export default Sign;
