import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <div className="mt-5 w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </div>
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
