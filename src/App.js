import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

import PrivateRoute from "./components/Auth/PrivateRoute";
import ForgotPassword from "./components/Auth/ForgotPassword.js";
import UpdateProfile from "./components/Auth/UpdateProfile";

function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <>
              <PrivateRoute exact path="/" component={HomePage} />
              <div className="d-flex align-items-center justify-content-center">
                <div className=" mt-5 w-100" style={{ maxWidth: "400px" }}>
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </div>
              </div>
            </>
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
