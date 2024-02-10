import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import AlertDialog from './alertDialog';

export default function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (e) => {
        // console.log("password: ", password);
        e.preventDefault();
       if(password!==confirmPassword){
              setErrorMessage("Password does not match");
              setIsErrorDialogOpen(true);
         }
         else if(password.length<8){
            setErrorMessage("Password should be at least 8 characters");
            setIsErrorDialogOpen(true);
            }
            else if(password.search(/[a-z]/i) < 0){
                setErrorMessage("Password should contain at least one letter");
                setIsErrorDialogOpen(true);
            }
            else{
                const data = {
                    email: localStorage.getItem("email"),
                    password: password,
                };
                console.log(data);
                axios.put("http://127.0.0.1:8000/user/forget-password/",data)
                .then((response) => {
                    if (response.status === 200) {
                        window.location.href = "/signIn";
                        localStorage.removeItem("email");
                    }
                })
                .catch((error) => {
                    console.log(`error: ${error}`);
                    setErrorMessage(error.response.data.message);
                    setIsErrorDialogOpen(true);
                });
            }
        }
    
  return (<div className="contents">
  <div className="signInform">
      <h1>Change Password</h1>
      <p>Enter your new password</p>
      <div className="form">
      <label htmlFor="password">Password</label>
      <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm new password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
      />
      <div className="form-btn">
          <button onClick={handleSubmit}>Change Password</button>
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
