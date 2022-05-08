// import { useState } from "react"
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signupFailure, signupLoading, signupSuccess } from "../Redux/SignUp/action";
// import "./Signup.css"
// export const SignUp=()=>{
//     const [username, setUsername]= useState("")
//     const [password, setPassword ]= useState("");
//     const [name, setName ]= useState("");
//     const [email, setEmail ]= useState("");
//     const [description, setDescription ]= useState("");
//     const [mobile, setMobile ]= useState("");

 

//     const dispatch= useDispatch();
//     const navigate= useNavigate();

//     const handleSubmit=()=>{
//         const userDetail={
//             name,
//             email,
//             password,
//             username,
//             mobile,
//             description
//         };

//         dispatch(signupLoading());  //set loading status to true

//         fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
//             method:"POST",
//             body: JSON.stringify(userDetail),
//             headers:{
//                  "Content-Type": "application/json"
//             }
//         })
//         .then((res)=>res.json())
//         .then((res)=>{
//             dispatch(signupSuccess(res.token));
//             console.log("succ")
//             navigate("/login");
//         })
//         .catch((err)=>dispatch(signupFailure(err)))
//     }
//     return (
//         <div>
//         <div id="p">
//         <div id="login-form-di">
            
//             <h1 className="mana">Welcome</h1>
//     <hr className="line"></hr>
//             <input type="text"
//             id="fu"
//             className="f1"
//                 placeholder="Enter name" 
//                 value={ name }
//                 onChange={(e)=>{setName(e.target.value)}} 
//                 />

//                 <br />

//                 <input type="text"
//                 placeholder="Enter Email" 
//                 className="f1"
//                 value={email}
//                 onChange={(e)=>{setEmail(e.target.value)}} 
//                 />

//                 <br />

//                 <input type="text"
//                 placeholder="password"
//                 className="f1"
//                 value={password}
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                   />       

//                 <br />

//                 <input type="text"
//                 placeholder="Enter username" 
//                 className="f1"
//                 value={username}
//                 onChange={(e)=>{setUsername(e.target.value)}} 
//                 />

//                <br />

//                 <input type="number"
//                 placeholder="Enter Mobile no" 
//                 className="f1"
//                 value={ mobile }
//                 onChange={(e)=>{setMobile(e.target.value)}} 
//                 />

//                 <br />

//            <input type="text"
//                 placeholder="Enter Lastname" 
//                 className="f1"
//                 value={description}
//                 onChange={(e)=>{setDescription(e.target.value)}} 
//                 />

//            <br />

        

//         <button  id="signinbu" onClick={handleSubmit}>SignUp</button>
//         <p id="forge">fogret the password</p>
        
       
//         </div>
//         </div>
//         </div>
//     )
// }

import { useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupFailure, signupLoading, signupSuccess } from "../Redux/SignUp/action";
import "../Style/Signup.css"
export const SignUp = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const userDetail = {
            name,
            email,
            password,
            username,
            mobile,
            description
        };

        dispatch(signupLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: "POST",
            body: JSON.stringify(userDetail),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                dispatch(signupSuccess(res.token));
                console.log("succ")
                navigate("/login");
            })
            .catch((err) => dispatch(signupFailure(err)))
    }
    return (
        <div>
            <div id="p">
                <div id="login-form-di">

                    <h1 className="mana">Register Now</h1>
                    <hr className="line"></hr>
                    <input type="text"
                        id="fu"
                        className="f1"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <br />


                    <div className="change_login_div">
                        <div>
                            <Link to="/Login" >
                                <div className="radioBtn_div"></div>
                            </Link>
                            <p className="radioBtn_p">I'm already registered</p>
                        </div>
                        <div>

                            <div className="radioBtn_div_clicked"></div>

                            <p className="radioBtn_p">I'm new to THE OUTNET</p>
                        </div>

                    </div>
                    <input type="text"
                        placeholder="Enter Lastname"
                        className="f1"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />

                   

                    <br />
                    <input type="text"
                        placeholder="Enter Email"
                        className="f1"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                   

                    <br />

                    <input type="text"
                        placeholder="Enter username"
                        className="f1"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />

                    <br />

                    <input type="number"
                        placeholder="Enter Mobile no"
                        className="f1"
                        value={mobile}
                        onChange={(e) => { setMobile(e.target.value) }}
                    />

                    <br />

                    <input type="text"
                        placeholder="password"
                        className="f1"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />

                    <br />



                    <button id="signinbu" onClick={handleSubmit}>SignUp</button>
                    <p id="forge">forget password</p>


                </div>
            </div>
        </div>
    )

}