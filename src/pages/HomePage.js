
import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Model from "../components/Model";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";


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
