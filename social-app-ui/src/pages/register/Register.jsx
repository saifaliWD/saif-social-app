import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <form action="/home">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">saif-social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on saif-social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" required />
            <input placeholder="Email" className="loginInput"required />
            <input placeholder="Password" className="loginInput"  required />
            <input placeholder="Password Again" className="loginInput" required />
            <button className="loginButton">Sign Up</button>
            <Link to='/'><button className="loginRegisterButton">
              Log into Account
            </button></Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
