import React from "react";

const Model = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    return e.target.classList.contains("backdrop") ? setSelected(null) : null;
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selected} alt="full size pic" />
    </div>
  );
};

export default Model;
