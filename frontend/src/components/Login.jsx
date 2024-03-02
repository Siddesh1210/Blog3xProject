import React from "react";
import "../components/CSS/Signup.css";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="emptySpace"></div>
      <div className="main">
        <div className="signup">
          <h2>Let's Login</h2>
          <form>
            <input type="text" placeholder="Email" name="email" id="email" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            <button type="submit">Login</button>
            <p style={{color:"black",fontSize:"16px",paddingTop:"15px",textAlign:"center"}}>Create new account? <Link to="/auth/signup">Signup</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
