import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Model from "./components/Model";
import Signup from "./components/Signup";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <Container>
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelected={setSelected} />
        {selected && <Model selected={selected} setSelected={setSelected} />}
      </div>
      <AuthProvider>
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </AuthProvider>
    </Container>
  );
}

export default App;
