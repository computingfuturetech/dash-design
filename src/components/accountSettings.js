import React, { useEffect } from "react";
import "../assets/css/accountSettings.css";
import SwitchButton from "./switchButton";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import AlertDialog from "./alertDialog";
export default function AccountSettings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [oldPasswordAria, setOldPasswordAria] = useState(true);
  const [passwordAria, setPasswordAria] = useState(true);
  const [confirmPasswordAria, setConfirmPasswordAria] = useState(true);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [button, setButton] = useState("Change Password");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [authButton, setAuthButton] = useState("Enable");
  const [phone, setPhone] = useState("");
  const [emailAria, setEmailAria] = useState(true);
  const [phoneAria, setPhoneAria] = useState(true);

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );

  const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  );

  const handleOldPasswordChange = (e) => {
    e.preventDefault();
    setOldPassword(e.target.value);
    if (passwordRegex.test(e.target.value)) {
      setOldPasswordAria(true);
    } else {
      setOldPasswordAria(false);
    }
  };
  const handleNewPasswordChange = (e) => {
    e.preventDefault();
    setNewPassword(e.target.value);
    if (passwordRegex.test(e.target.value)) {
      setPasswordAria(true);
    } else {
      setPasswordAria(false);
    }
  };
  const handleConfirmNewPasswordChange = (e) => {
    e.preventDefault();
    setConfirmNewPassword(e.target.value);
    if (passwordRegex.test(e.target.value)) {
      setConfirmPasswordAria(true);
    } else {
      setConfirmPasswordAria(false);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Password does not match");
      setIsErrorDialogOpen(true);
    } else if (newPassword.length < 8) {
      setErrorMessage("Password should be at least 8 characters");
      setIsErrorDialogOpen(true);
    } else if (newPassword.search(/[a-z]/i) < 0) {
      setErrorMessage("Password should contain at least one letter");
      setIsErrorDialogOpen(true);
    } else {
      const data = {
        new_password: newPassword,
        old_password: oldPassword,
      };
      const jwt = JSON.parse(localStorage.getItem("login"));
      const token = jwt.token;
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };

      console.log(token);
      setButton(
        <ReactLoading height={40} width={40} type={"cylon"} color={"#fff"} />
      );

      //   console.log(data);
      axios
        .put("http://127.0.0.1:8000/user/cpassword/", data, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then((response) => {
          //   console.log(response);
          if (response.status === 200) {
            setButton("Change Password");
            setErrorMessage("Password Changed Successfully");
            setIsErrorDialogOpen(true);
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          }
        })
        .catch((error) => {
          setButton("Change Password");

          //   console.log(`old_password: ${error.response.data.old_password}`);
          if (error.response.data.old_password != undefined) {
            setErrorMessage(error.response.data.old_password);
          }
          //   setErrorMessage(error.response.data.old_password);
          else setErrorMessage(error.response.data.non_field_errors);
          setIsErrorDialogOpen(true);
        });
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
    if (emailRegex.test(e.target.value)) {
      setEmailAria(true);
    }
    else{
      setEmailAria(false);
    }
    console.log(`email is ${email}`);

  };

  const handleTwoFactorAuth = (e) => {
    e.preventDefault();
    let check = 'True'
    if(twoFactorAuth){
      check = 'False'
    }else{
      check = 'True'
    }

    const data = {
      sec_email: email,
      twofa: check,
    };
    console.log(data);
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .post("http://127.0.0.1:8000/user/twofa/", data, config)
      .then((response) => {
        console.log(response);
        if(response.data.twofa){
          setEmail(response.data.sec_email);
          setAuthButton('Disable');
          setErrorMessage("Two Factor Authentication Enabled");
          setIsErrorDialogOpen(true);
        }
        else{
          setEmail('');
          setAuthButton('Enable');
          setErrorMessage("Two Factor Authentication Disabled");
          setIsErrorDialogOpen(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);;
        setIsErrorDialogOpen(true);
        console.log(error);
      });
  };

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .post("http://127.0.0.1:8000/user/twofa/",{}, config)
      .then((response) => {
        if(response.data.twofa){
          setAuthButton('Disable');
        }else{
          setAuthButton('Enable');
        }
        setTwoFactorAuth(response.data.twofa);
      })
      .catch((error) => {
      });
  });

  return (
    <div className="account-settings-main-container">
      <div className="account-settings-left-container">
        <div className="change-password-container">
          <h1>Change Password</h1>
          <form action="">
            <input
              type="password"
              placeholder="Old Password"
              onChange={handleOldPasswordChange}
              value={oldPassword}
            />
            {oldPasswordAria ? null : (
              <div className="error">
                <p className="errorp">Invalid Password</p>
              </div>
            )}
            <input
              type="password"
              placeholder="New Password"
              onChange={handleNewPasswordChange}
              value={newPassword}
            />
            {passwordAria ? null : (
              <div className="error">
                <p className="errorp">Invalid Password</p>
              </div>
            )}
            <input
              type="password"
              placeholder="Confirm New Password"
              onChange={handleConfirmNewPasswordChange}
              value={confirmNewPassword}
            />
            {confirmPasswordAria ? null : (
              <div className="error">
                <p className="errorp">Invalid Password</p>
              </div>
            )}
            <button
              onClick={handlePasswordChange}
              disabled={
                !(
                  passwordAria &&
                  confirmPasswordAria &&
                  newPassword != "" &&
                  confirmNewPassword != ""
                )
              }
            >
              {button}
            </button>
          </form>
        </div>
        <div className="two-factor-auth">
          <h1>Two Factor Authentication</h1>
          <p>
            Two factor authentication adds an extra layer of security to your
            account. You will be asked to enter a code sent to your email or
            phone number when you sign in.
          </p>
          <div className="two-factor-auth-container">
            <form action="">
              <input type="email" name="email" id="email" onChange={handleEmailChange} value={email} placeholder="Email" />
              {emailAria ? null : (
            <div className="error">
            <p className="errorp">Invalid email</p></div>)}
              <input type="tel" name="phone" id="phone" placeholder="Phone" />
              <button onClick={handleTwoFactorAuth}>{authButton}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="account-settings-right-container">
        <div className="notifications">
          <h1>Notifications</h1>
          <div className="notifications-container">
            <div className="notification">
              <h3>Bill Notifications</h3>
              <SwitchButton />
            </div>
            <div className="notification">
              <h3>Payment Notifications</h3>
              <SwitchButton />
            </div>
            <div className="notification">
              <h3>Security Notifications</h3>
              <SwitchButton />
            </div>
            <div className="notification">
              <h3>App Notifications</h3>
              <SwitchButton />
            </div>
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
