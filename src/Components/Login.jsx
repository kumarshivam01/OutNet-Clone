import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfailure, loginLoading, loginSuccess } from "../Redux/Login/action";
import "./Login.css"
export const Login=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword ]= useState("");

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        const userDetail={
            username,
            password
        };

        dispatch(loginLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method:"POST",
            body: JSON.stringify(userDetail),
            headers:{
                 "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(loginSuccess(res.token));
            navigate("/");
        })
        .catch((err)=>dispatch(loginfailure(err)))
    }
    return (
        <div id="pic">
      <div id="login-form-div">
            
            <h1 className="mana">Welcome</h1>
    <hr className="line"></hr>
         <input type="text"
           className="f1"
                placeholder="Enter username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}} 
                />

           <br />

         <input type="text"
           className="f1"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}  />       

           <br />

        <button  id="signinbu" onClick={handleSubmit}>Login</button>
        </div>
        </div>
    )
}