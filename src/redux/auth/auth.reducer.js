import { LOGIN, LOGOUT } from "./auth.type";

const token = localStorage.getItem("token")

const initState = {
    isAuth : false,
    token : !!token
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN :{
            console.log(action.payload);
            localStorage.setItem("token",action.payload)
            return{
                ...state ,
                token : action.payload,
                isAuth:true
            }
        }
        case LOGOUT : {
            localStorage.removeItem("token")
            return {
                ...state,
                token : "",
                isAuth : false
            }
        }
        default : return state
    }
}

export default authReducer