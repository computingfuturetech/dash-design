import React from "react";
import AuthNav from "../../components/authNav";
import "../../assets/css/signUp.css";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import {useState} from "react";


export default function AuthicationScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(isSignUp);
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up clicked");
    
    // setIsSignUp(true);
    console.log(isSignUp);
  }
  return (

    <>
      <div className="container">
      <AuthNav />

        <div className="left">
          <h1>INSPIRED BY THE FUTURE:</h1>
          <h2>THE VISION UI DASHBOARD</h2>
        </div>
        <div className="right">
          <SignIn isSignUp setIsSignUp/>
          {/* <SignUp /> */}
        </div>
      </div>
    </>
  );
}
