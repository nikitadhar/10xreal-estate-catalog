import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
const Login = () => {

    const [userdata, setData] = useState({ mail: "", password: "" })
    const navigate = useNavigate();
    function handlemail(e) {
        const mail = e.target.value;
        setData(prevForm => ({ ...prevForm, mail: mail }))

    }

    function handlepassword(e) {
        const password = e.target.value;
        setData(prevForm => ({ ...prevForm, password: password }))

    }

    function handlelogin(e) {
        e.preventDefault();
        if (userdata.mail.length === 0) {
            alert("Please enter your e-mail");
        }
        else if (userdata.password.length < 6) {
            alert("Please enter a valid password");
        }
        else {
            console.log(userdata);
            axios({
                url: "http://localhost:3001/login/poat",
                method: "POST",
                headers: {

                },
                data: userdata
            })
                .then((res) => {
                    navigate("/BasicInfo");
                    console.log(res);
                })
                .catch((err) => {
                    alert("UserID and Password does not match");
                    console.log(err);
                })


            setData({ mail: "", password: "" })

        }



    }

    return (
        <div className="login_container">
            <div className="top_bar">
                 
                    <h1 className="logo_heading">Logo</h1>
            
                <form className="login_form" onSubmit={handlelogin}>
                    
                        <p >Enter your credentials to access your account</p>
                 
                    <br />
                    <div className="form-input" >
                        <input className="field" type="email" placeholder="User ID" onChange={handlemail}></input>
                    </div>
                    <br />
                    <div className="form-input">
                        <input className="field" type="password" placeholder="Password" onChange={handlepassword}></input>
                    </div>
                    <br />

                    <br />
                    <div className="form-input">
                        <input className="submit" value="Sign in" type="submit" />
                    </div>
                    <br /><br/>

                    <div>
                        <Link to="/Signup"><a className="signup">Sign up</a></Link>
                    </div>
                </form>
            </div>

            <div className="account_box">
                <span className="span">Don't have an account ? </span>
                <Link to="/Signup"><a className="sign">sign up</a></Link> 
            </div>
        </div>
    )
}
export default Login;