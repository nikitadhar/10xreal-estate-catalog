import { useState } from "react";
import axios from "axios"
import { Link,useNavigate } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
    const [userdata,Setval] = useState({
        mail: "",
        password: "",
        confirmpassword: ""
    })
    const navigate = useNavigate();
    function handlemail(e){
            const mail = e.target.value;
            Setval(prevForm => ({...prevForm,mail:mail}))
    }
    function handlepassword(e){
            const password = e.target.value;
            Setval(prevForm => ({...prevForm,password:password}))
    }
    function handleconfirm(e)
    {
            Setval(prevForm => ({...prevForm,confirmpassword:e.target.value}))
    }
    function handlesignup(e) {
        e.preventDefault();
        if(userdata.mail.length === 0)
        {
            alert("Please Enter your e-mail");
        }
        else if(userdata.password.length < 6)
        {
            alert("Please enter a valid password of length less than 6 character");
        }
        else
        {
            if(userdata.password !== userdata.confirmpassword)
            {
                alert("Password doesn't match");
            }
            else
            {
               axios({
                url:"http://localhost:3001/signup1/signup",
                method : "POST",
                headers :{
                },
                data:userdata
               })
               .then((res)=>
               {
                navigate("/");
                 console.log(res);
               })
               .catch((err)=>
               {
                    alert('User Already exists')
                // console.log(err);
               })
                Setval({mail:"",password:"",confirmpassword:""})
            }
        }
    }
    return (
        <div className="login_container">
            <div className="top_bar">
                <div className="logo">
                   <h1 className="logo_heading">Logo</h1>
                </div>
                <form className="login_form" onSubmit={handlesignup}>
                    <div >
                        <p className="signup_heading">Create New Account</p>
                    </div>
                    <br/>
                    <div className="form-input">
                        <input className="userid" type="email" placeholder="Mail ID" onChange={handlemail}></input>
                    </div>
                    <br/>
                    <div className="form-input">
                        <input className="pass" type="password" placeholder="Password" onChange = {handlepassword}></input>
                    </div>
                    <br/>
                    <div className="form-input">
                        <input className="pass" type="password" placeholder="Confirm Password" onChange= {handleconfirm} ></input>
                    </div>
                    <br/>
                    <br/>
                    <div className="form-input">
                        <input className="submit" value="Signup" type="submit" />
                    </div>
                    <br/>
                </form>
            </div>
            <div className="account_signup">
                <Link to="/"><a className="sign">Sign in</a></Link>
            </div>
        </div>
    )
}
export default Signup;