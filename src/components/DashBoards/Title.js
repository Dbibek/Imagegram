import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Title = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  async function handleClick() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("failed to logout");
    }
  }
  return (
    <>
      {error ? (
        { error }
      ) : (
        <div className="title">
          <div className="d-flex justify-content-between w-100 text-center mt-2  ">
            <h1>ImageGram</h1>
            <div className="d-flex justify-content-between">
              <Link to="/update-profile" variant="Link" className=" w-60 mt-2">
                Update Profile
              </Link>
              <Button variant="Link" className="" onClick={handleClick}>
                Log Out
              </Button>
            </div>
          </div>
          <h2>Your Pictures </h2>
          <p>
            Photograph: a picture painted by the sun without instruction in art.
          </p>
          <p>
            “You can look at a picture for a week and never think of it again.
            You can also look at a picture for a second and think of it all your
            life.”
          </p>
        </div>
      )}
    </>
  );
};

export default Title;
