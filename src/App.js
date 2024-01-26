import "./App.css";
import SignUp from "./pages/authPages/AuthenticationScreen";
import Dashboard from "./pages/dashboard/dashboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Link to="/signUp">Sign Up</Link>
        {/* <Link to="/signIn">Sign In</Link> */}
        <Link to="/">Dashboard</Link>
        <Routes>
          {/* <Route path="/signUp">
            <SignUp />
          </Route> */}
          {/* <Route path="/signIn" >
         <SignIn/>
        </Route> */}
          <Route path="/">
            <Dashboard />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
