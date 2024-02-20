import React from "react";
import AuthNav from "../../components/authNav";
import "../../assets/css/signUp.css";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import ForgotPassword from "../../components/forgotPassword";
import VerifyOTP from "../../components/verifyOTP";
import ChangePassword from "../../components/changePassword";
import VerifyLoginOTP from "../../components/verifyLoginOTP";

export default function AuthicationScreen(props) {
  console.log(`Props value: ${props.isSignUp}`);
  return (
    <>
      <div className="container">
        {/* <AuthNav /> */}

        <div className="left">
          <h1>INSPIRED BY THE FUTURE:</h1>
          <h2>THE VISION UI DASHBOARD</h2>
        </div>
        <div className="right">
          {props.isSignUp ? (
            <SignUp />
          ) : props.isForgot ? (
            <ForgotPassword />
          ) : props.isverify ? (
            <VerifyOTP />
          ) : props.isChange ? (
            <ChangePassword />
          ) : props.isloginverify ? (
            <VerifyLoginOTP />
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </>
  );
}
