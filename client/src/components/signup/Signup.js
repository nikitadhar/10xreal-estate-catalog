import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        email:"",
        password:"",
        cpassword:""
    })
    const handleClick=e=>{
    const{name, value}=e.target
      setUser({
        ...user,[name]:value
      })
    }
    const register=()=>{
        const {email, password, cpassword}=user
    
        if(email && password && cpassword && (password===cpassword)){
            //  axios.post("http://localhost:3005/register",user)
             axios.post("https://real-estate-server10.herokuapp.com/",user)
           
          
            .then(res=>console.log(res))
            navigate("/Login");
        }
        else{
            alert("Invalid")
        }
       
    }
   
    return (
<div className="login_container">
 <div className="top_bar">
<div className="logo">
<h1 className="logo_heading">Logo</h1></div>
<form className="login_form">
<div ><p className="signup_heading">Create New Account</p></div><br />
<div className="form-input">
<input className="field" type="email" name="email" value={user.name} placeholder="Mail ID" onChange={handleClick}></input></div><br />
<div className="form-input">
<input className="field" type="password" name="password" value={user.password} placeholder="Password" onChange={handleClick}></input></div><br />
<div className="form-input">
<input className="field" type="password" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handleClick} ></input></div><br /><br />
<div className="form-input">
<input className="submit" value="Sign up" type="submit" onClick={register} /></div><br /></form></div>
            <div className="account_box">
                <Link to="/Login"><a href="?Login" className="signin">Sign in</a></Link>
            </div>
        </div>
    )
}
export default Signup;