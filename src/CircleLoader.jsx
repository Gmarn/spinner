import React from 'react';
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  width: "3rem",
  height: "3rem",
  boxSizing: "border-box",
  margin: "50px"
};

const outerCircleStyle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const innerCircleStyle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: "0.5rem",
  left: "0.5rem"
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

const outerTransition = {
  duration: 1
}

export default function CircleLoader() {
  return <div style={containerStyle}>
    <motion.span
      style={outerCircleStyle}
      transition={outerTransition}
    />
    <motion.span
      style={innerCircleStyle}
      animate={{ rotate: 360 }}
      transition={spinTransition}
    />
  </div>;
}
