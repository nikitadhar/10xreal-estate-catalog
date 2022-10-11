import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleClick = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const signin = (e) => {
        // axios.post("http://localhost/3005/login", user)
        //     .then(res => console.log(res))
        // const {email, password}=user
    
        // if(email && password ){
        //      axios.post("http://localhost:3005/login",user)
           
          
        //     .then(res=>console.log(res))
        //     navigate("/BasicInfo");
        // }
        // else{
        //     alert("Invalid")
        // }
        e.preventDefault();
        if (user.email === "" || user.password === "") {
            alert("username or password is missing");
        } else {
            axios({
                url: "https://real-estate-server10.herokuapp.com/",
                method: "POST",
                headers: {
                },
                data: user
            }).then(() => {
                
               navigate("/BasicInfo");
            }).catch((err) => {
                
                alert(err.response.data.message)
            })
        }
       
    }
    return (
        <div className="login_container">
 <div className="top_bar">
 <h1 className="logo_heading">Logo</h1>
<form className="login_form" action="/login">
<p >Enter your credentials to access your account</p> <br />
<div className="form-input" >
<input className="field" type="email" name="email" value={user.email} onChange={handleClick} placeholder="User ID" ></input></div><br />
<div className="form-input">
<input className="field" type="password" name="password" value={user.password} onChange={handleClick} placeholder="Password"></input></div><br /><br />
<div className="form-input">
<input className="submit" value="Sign in" onClick={signin} type="submit" /></div><br /><br /><div>
<Link to="/Signup"><a href="Signup" className="signup">Sign up</a></Link></div></form></div>
<div className="account_box">
<span className="span">Don't have an account ? </span>
<Link to="/Signup"><a href="Signup" className="sign">sign up</a></Link>
</div></div>
    )
}
export default Login;