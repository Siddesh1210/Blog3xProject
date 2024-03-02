import React from "react";
import "../components/CSS/Signup.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="emptySpace"></div>
      <div className="main">
        <div className="signup">
          <h2>Create New Account</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
            <input type="text" placeholder="Email" name="email" id="email" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              id="password"
            />

            <button type="submit">Sign Up</button>
            <p style={{color:"black",fontSize:"16px",paddingTop:"15px",textAlign:"center"}}>Already has Account? <Link to="/auth/login">Login</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
