import React from "react";
import AuthNav from "../../components/authNav";
import "../../assets/css/signUp.css";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

export default function AuthicationScreen(props) {
  console.log(`Props value: ${props.isSignUp}`);
  return (
    <>
      <div className="container">
        <AuthNav />

        <div className="left">
          <h1>INSPIRED BY THE FUTURE:</h1>
          <h2>THE VISION UI DASHBOARD</h2>
        </div>
        <div className="right">{props.isSignUp ? <SignUp /> : <SignIn />}</div>
      </div>
    </>
  );
}
