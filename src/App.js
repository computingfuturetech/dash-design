import "./App.css";
import SignUp from "./pages/authPages/AuthenticationScreen";
import Dashboard from "./pages/dashboard/dashboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {

  
  // let isSignUp = false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signUp" element={<SignUp isSignUp = {true}/>}>
          </Route>
          <Route path="/signIn" element={<SignUp isSignUp = {false}/>}>
          </Route>
          <Route path="/" element={<Dashboard/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
