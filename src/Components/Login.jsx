

import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginfailure, loginLoading, loginSuccess } from "../Redux/Login/action";
import "../Style/Login.css"




export const Login = () => {



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const userDetail = {
            username,
            password
        };

        dispatch(loginLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify(userDetail),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                dispatch(loginSuccess(res.token));
                navigate("/");
            })
            
            .catch((err) => dispatch(loginfailure(err)));
            alert('Password or username not match')
            
           
    }








    return (
        <div id="p">
            <div id="login-form-di">

                <h1 className="mana">Welcome</h1>
                <hr className="line"></hr>
                <input type="text"
                    className="f"
                    id="fu"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />

                <br />


                <div className="change_login_div">
                    <div>
                        <div className="radioBtn_div_clicked"></div>
                        <p className="radioBtn_p">I'm already registered</p>
                    </div>
                    <div>
                        <Link to="/Signup"  >
                            <div className="radioBtn_div"></div>
                        </Link>
                        <p className="radioBtn_p">I'm new to THE OUTNET</p>
                    </div>

                </div>




                <input type="text"
                    className="f"
                    placeholder="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />

                <br />

                <button id="signinbu" onClick={handleSubmit}>Login</button>
                <p id="forge">fogret the password</p>
            </div>
        </div>

    )
}