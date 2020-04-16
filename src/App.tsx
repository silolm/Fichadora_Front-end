import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LogIn";
import SignUpScreen from "./screens/SingUp";
import "./App.css";
import SidebarNav from "./layouts/main/components/sidebar";

function App() {
  return (
    <Router>
      <SidebarNav open variant={"permanent"}/>
      <Switch>
        <Route path="/LogIn">
          <LoginScreen/>
        </Route>
        <Route path="/SignUp">
          <SignUpScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
