import React from "react";
import { motion } from "framer-motion";

const Model = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    return e.target.classList.contains("backdrop") ? setSelected(null) : null;
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
    >
      <motion.img src={selected} alt="full size pic"
      initial={{y:"-100vh"}}
      animate={{y:0}} />
    </motion.div>
  );
};

export default Model;
