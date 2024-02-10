import React from "react";
import "../assets/css/signIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import AlertDialog from "./alertDialog";

export default function ForgotPassword() {
    const [email, setEmail] = React.useState("");
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    

    const handleSubmit = (e) =>  {
        // e.preventDefault();
        // const email = e.target.email.value;
        // console.log(email);
        const data = {
            email: email.toLowerCase(),
          };
        axios.post("http://127.0.0.1:8000/user/send-otp/", data)
        .then((response) => {
            // console.log(`responsedata: ${response.status.data}`)
            // console.log(`email: ${email}`);
            localStorage.setItem("email", email.toLowerCase());
            // console.log(`response: ${response.status}`)
            if (response.status === 201) {
                window.location.href = "/forgotPassword/verify";
                // console.log("Email sent");
            }
        }).catch((error) => {
            // console.log(`error: ${error}`);
            setErrorMessage("Invalid email");
            setIsErrorDialogOpen(true);
        });
    }

  return (
    <div className="contents">
      <div className="signInform">
        <h1>Forgot Password</h1>
        <p>Enter your email and we'll send you a link to reset your password</p>
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
          <div className="form-btn">
            <Link to="">
              <button onClick={handleSubmit}>Send</button>
            </Link>
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
