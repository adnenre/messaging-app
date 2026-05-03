// src/containers/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../containers/ChatWindow";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../components/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Sidebar} />
        <PrivateRoute path="/chat/:userId" component={ChatWindow} />
      </Switch>
    </Router>
  );
};

export default App;
