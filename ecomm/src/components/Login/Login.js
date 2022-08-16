import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="home-title text-center">
                Welcome to the InstaShop
              </h2>
              <div className="login-wrapper">
                <h4 className="text-center">
                  {" "}
                  {showSignup ? "Signup" : "Login"}{" "}
                </h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    id="username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    id="email"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={showSignup ? "Sign Up" : "Log In"}
                  />
                </div>
                <div onClick={toggleSignup} className="signup-btn">
                  {showSignup
                    ? "Already have and Account? Login"
                    : "Dont have an account? Sign up"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
