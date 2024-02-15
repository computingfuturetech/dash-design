import "./App.css";
import Billing from "./pages/Billing/billing";
import Tables from "./pages/Tables/tables";
import SignUp from "./pages/authPages/AuthenticationScreen";
import Dashboard from "./pages/dashboard/dashboard";
import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Profile from "./pages/profile/profile";
import ForgotPassword from "./components/forgotPassword";

function App() {
  // let isSignUp = false;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
  
  if (localStorage.getItem("login")) {
    
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    const jwtpayload = JSON.parse(window.atob(token.split('.')[1]))
    if (jwtpayload.exp * 1000 < Date.now()) {
      console.log("Token expired");
      localStorage.removeItem("login");
      window.location.href = "/signIn";
      setIsLoading(false);
      
    }

  }},[localStorage.getItem("login")])

  return (
    <>

      <Router>
        <Routes>
          <Route path="/signUp" element={<SignUp isSignUp={true} />}></Route>
          <Route path="/signIn" element={<SignUp isSignUp={false} />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tables" element={<Tables/>}></Route>
          <Route path="/billing" element={<Billing/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="*" element={<Dashboard />}></Route>
          <Route path="/forgotPassword" element={<SignUp isForgot={true}/>}></Route>
          <Route path="/forgotPassword/verify" element={<SignUp isverify={true}/>}></Route>
          <Route path="/changePassword" element={<SignUp isChange={true}/>}></Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
