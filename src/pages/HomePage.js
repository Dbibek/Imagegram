import React, { useState } from "react";
import ImageGrid from "../components/DashBoards/ImageGrid";
import Model from "../components/DashBoards/Model";
import Title from "../components/DashBoards/Title";
import UploadForm from "../components/DashBoards/UploadForm";

const HomePage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      {selected && <Model selected={selected} setSelected={setSelected} />}
    </div>
  );
};

export default HomePage;
