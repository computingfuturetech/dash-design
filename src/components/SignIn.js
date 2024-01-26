import React from "react";
import "../assets/css/signIn.css";

export default function SignIn(props) {

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Sign up clicked");
        console.log(props);
        
    }
  return (
    <div className="contents">
      <div className="signInform">
        <h1>Nice to see you!</h1>
        <p>Enter your email and password to sign in</p>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
          />
          <div className="form-btn">
            <button>SIGN IN</button>
          </div>
          <div className="form-footer">
            <p>
              Don't have an account? <a href="/" onClick={handleSignUp}>Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
