import * as React from "react";
import { motion } from "framer-motion";

const outerSpinnerIcon = {
  hidden: {
    pathLength: 0.20,
    stroke: "#111",
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    pathLength: 1,
    stroke: "#ddd",
    fill: "rgba(0, 0, 0, 0)"
  }
};

const outerSpinnerIconLight = {
  hidden: {
    pathLength: 0,
    stroke: "#ddd",
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 0)"
  }
};

export default function PathLoader() {
  return <div className="spinner-container">
    <motion.svg
      viewBox="0 0 100 100"
      className="outer-spinner"
    >
      <motion.path
        d="
          M 150,75
          A 75,75 0,0,1 0,75
          A 75,75 0,0,1 150,75
        "
        className="outer-spinner-line"
        variants={outerSpinnerIcon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          loop: Infinity
        }}
      />
    </motion.svg>
  </div>
};
