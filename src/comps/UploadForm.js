import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("please select and image file( png or jpeg)");
    }
  };
  return (
    <form>
      <input type="file" onChange={handleChange} />
      <div className="output">
        {err && <div className="error">{err}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
