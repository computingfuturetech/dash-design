import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/signIn.css";
import { useState } from "react";
import axios from 'axios';
import AlertDialog from './alertDialog';

export default function VerifyOTP() {
    const [otp, setOtp] = useState("");
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = (e) => {  
        const data = {
            email: localStorage.getItem("email"),
            otp: otp,
        };
        axios.post("http://127.0.0.1:8000/user/verify-otp/", data)
        .then((response) => {
            if (response.status === 200) {
                window.location.href = "/changePassword";
            }
        })
        .catch((error) => {
            console.log(error);
            setErrorMessage("Invalid OTP");
            setIsErrorDialogOpen(true);
        });

    }
    const handleResend = (e) => {
        const data = {
            email: localStorage.getItem("email"),
        };
        axios.post("http://127.0.0.1:8000/user/send-otp/", data)
        .then((response) => {
            if (response.status === 201) {
                // console.log("OTP sent");
                setErrorMessage("OTP sent");
                setIsErrorDialogOpen(true);
            }
        })
        .catch((error) => {
            console.log(`error: ${error}`);
            setErrorMessage("Invalid email");
            setIsErrorDialogOpen(true);
        });
    }
  return (
    <div className="contents">
        <div className="signInform">
            <h1>Verify OTP</h1>
            <p>Enter the OTP sent to your email address</p>
            <div className="form">
            <label htmlFor="otp">OTP</label>
            <input
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
            />
            <div className="form-resend">
                <button onClick={handleResend}>Resend OTP ?</button>
            </div>
            <div className="form-btn">
                <Link to="">

                <button onClick={handleSubmit}>Verify</button>
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
  )
}
