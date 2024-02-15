import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/signIn.css";
import { useState } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import AlertDialog from './alertDialog';

export default function VerifyOTP() {
    const [otp, setOtp] = useState("");
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [button, setButton] = useState("Verify");
    const otpRegex = new RegExp(/^[0-9]{6}$/);
    const [otpAria, setOtpAria] = useState(true);

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        if (otpRegex.test(e.target.value)) {
            setOtpAria(true);
        } else {
            setOtpAria(false);
        }
    }

    
    

    
    const handleSubmit = (e) => {  
        const data = {
            email: localStorage.getItem("email"),
            otp: otp,
        };
        setButton( <ReactLoading height={40} width={40} type={"cylon"} color={"#fff"} />);

        axios.post("http://127.0.0.1:8000/user/verify-otp/", data)
        .then((response) => {
            if (response.status === 200) {
                window.location.href = "/changePassword";
            }
        })
        .catch((error) => {
          setButton("Verify");

            console.log(error);
            setErrorMessage("Invalid OTP");
            setIsErrorDialogOpen(true);
        });

    }
    const handleResend = (e) => {
        const data = {
            email: localStorage.getItem("email"),
        };
        setButton( <ReactLoading height={40} width={40} type={"cylon"} color={"#fff"} />);

        axios.post("http://127.0.0.1:8000/user/send-otp/", data)
        .then((response) => {
            if (response.status === 201) {
                setButton("Verify");
                // console.log("OTP sent");
                setErrorMessage("OTP sent");
                setIsErrorDialogOpen(true);
            }
        })
        .catch((error) => {
          setButton("Verify");

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
                // onChange={(e) => setOtp(e.target.value)}
                onChange={(e) => {handleOtpChange(e) }}
                value={otp}
            />
            <div className="form-resend">
                <button onClick={handleResend}>Resend OTP ?</button>
            </div>
            <div className="form-btn">
                <Link to="">

                <button onClick={handleSubmit} disabled={!(otpAria&&otp!='')}>{button}</button>
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
