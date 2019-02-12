import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/Page/SignUp";
import AdminLayout from "../src/layouts/Admin/Admin.jsx";
import RTLLayout from "../src/layouts/RTL/RTL.jsx";
import LandingPage from "./components/LandingPage/LandingPage";
import LogIn from "./components/Page/Login";
// Import Login page update

import "./assets/css/black-dashboard-react.css";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>

      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Route exact path="/login" render={props => <LogIn {...props}/>} />
      <Route exact path="/signup" render={props => <SignUp {...props}/>} />
      <Route exact path="/"  render={props => <LandingPage {...props}/>} />
      

       <Redirect from="/" to="/admin/dashboard" /> 
    </Switch>
  </Router>,
  document.getElementById("root")
);
