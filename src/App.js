import "./App.css";
import Billing from "./pages/Billing/billing";
import Tables from "./pages/Tables/tables";
import SignUp from "./pages/authPages/AuthenticationScreen";
import Dashboard from "./pages/dashboard/dashboard";

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
