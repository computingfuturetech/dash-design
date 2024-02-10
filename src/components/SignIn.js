import React from "react";
import "../assets/css/signIn.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AlertDialog from "./alertDialog";

export default function SignIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    
    const handleSubmit = (e) => {
      const data = {
        email: email,
        password: password,
      };
      console.log(data);
      axios.post("http://127.0.0.1:8000/user/login/", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('login', JSON.stringify({login:true, token: response.data.token}))
          // localStorage.setItem('token', response.data.token);
          

          console.log(localStorage.getItem('login'));
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Invalid email or password");
        setIsErrorDialogOpen(true);
      });

    }
    
  return (
    <div className="contents">
      <div className="signInform">
        <h1>Nice to see you!</h1>
        {/* <p>Enter your email and password to sign in</p> */}
        <div className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="form-forgot">
            <p>
              <Link to="/forgotPassword">Forgot password?</Link>
            </p>
          </div>
          <div className="form-btn">
            <button onClick={handleSubmit}>SIGN IN</button>
          </div>
          <div className="form-footer">
            <p>
              Don't have an account? <Link to="/signUp">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <AlertDialog
        open={isErrorDialogOpen}
        errorMessage={errorMessage}
        onClose={() => setIsErrorDialogOpen(false)}
      />
    </div>
  );
}
