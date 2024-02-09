import "./App.css";
import Billing from "./pages/Billing/billing";
import Tables from "./pages/Tables/tables";
import SignUp from "./pages/authPages/AuthenticationScreen";
import Dashboard from "./pages/dashboard/dashboard";
import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Profile from "./pages/profile/profile";

function App() {
  // let isSignUp = false;
  useEffect(() => {
  if (localStorage.getItem("login")) {
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    console.log(token);
    // console.log(jwt);
    const jwtpayload = JSON.parse(window.atob(token.split('.')[1]))
    console.log(jwtpayload.exp * 1000);
    console.log("Token exists");
    console.log(Date.now());

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
        </Routes>
        </Router>
    </>
  );
}

export default App;
