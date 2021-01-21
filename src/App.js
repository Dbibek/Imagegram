import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";

import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword.js";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <div className="mt-5 w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
