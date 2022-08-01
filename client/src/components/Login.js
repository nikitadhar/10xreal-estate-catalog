import { Link } from "react-router-dom";
import "./Login.css"
import Logo from "./logo.jpg"
const Login=()=>{
    const [login, setLogin] = useState({userid: "", password: ""})
    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3001/user/login",
            method: "POST",
            headers: {
            },
            data: {userid: login.userid, password: login.password}
        }).then((loginData)=> {
           localStorage.setItem("authorization", loginData.data.authToken);
        }).catch((err)=> {
            console.log(err)
        })
    }
    return(
        <>
    <div>
        <div className="login_container">
            <div className="top_bar">
                <div className="logo_container">
                    <img className="logo"  src={Logo} alt="logo"></img>
                    <h6 className="heading">Enter you credentials to access your account</h6>
                </div>
                <div className="user_login">
                <input className="userid" type="text" onChange={(e)=> {setLogin({...login, userName: e.target.value})}}/>
                <input className="pass"type="password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                <i className="eye" ></i>
                </div>
                <div>
                <button type="submit"  className="submit">sign in</button>
                </div>
                  <Link to="Signup"><div className="signup">sign up</div></Link>
                  <div className="bottom_text">Don't have any account ?<Link to="Signup"><div className="text_sign">sign up</div></Link></div>
            </div>
              
        </div>
    </div>
        </>
    )
}
export default Login;