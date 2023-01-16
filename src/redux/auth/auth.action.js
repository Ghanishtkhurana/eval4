import axios from "axios";
import { LOGIN } from "./auth.type";

export const register =(formstate)=> async (dispatch) => {
    const res = await axios.post("http://localhost:8080/users/login",formstate);
    console.log(res.data.Token);
    return dispatch({type : LOGIN,payload : res.data.token})
  };