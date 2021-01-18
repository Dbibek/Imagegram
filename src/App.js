import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Model from "./components/Model";
import SignUp from "./components/SignUp";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { Container } from "react-bootstrap";
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
      <SignUp />
    </Container>
  );
}

export default App;
