
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Link, Navigate } from "react-router-dom"



export const Home=()=>{

    const {token, isAuthenticated}= useSelector((state)=>state.login);
   
    

    return (
        <>
          Home
        <div >
          
        <Link to="/dashboard">Home</Link>
            {" "}
            <Link to="./Login">Login</Link>
            {" "}
            <Link to="./Signup">SignUp</Link>
        </div>
        </>
    )
}