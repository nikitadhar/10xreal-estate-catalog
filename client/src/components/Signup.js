import { Link } from "react-router-dom";
import "./Signup.css"
import Logo from "./logo.jpg"
const Signup=()=>{


    return(
        <>
    <div>
        <div className="login_container">
            <div className="top_bar">
                <div className="logo_container">
                    <img className="logo"  src={Logo} alt="logo"></img>
                    <h6 className="account_heading">create new account</h6>
                </div>
                <div className="user_login">
                <input className="userid"  type="email" placeholder="Mail ID"></input>
                <input className="pass" type="password" placeholder="password"></input>
                <input className="pass1" type="password" placeholder="confirm password"></input>
                <i className="eye" ></i>
                </div>
                <div>
                <button type="submit"  className="submit">sign up</button>
                </div>
                <Link  to=""><div className="sign">sign in</div></Link>
            </div>
              
        </div>
    </div>
        </>
    )
}
export default Signup;