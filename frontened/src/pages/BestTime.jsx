import TimeForm from "../componenets/TimeForm";
import calendar from "./calendar.gif";
import { motion } from "framer-motion";
import React from "react";

const BestTime = () => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
      <img
          src={calendar} 
          alt="Crop GIF"
          className="w-12 h-12 mt-0.1"
      />
      Predict Best Time to Plant
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <TimeForm />
      </motion.div>
    </motion.div>
  );
};

export default BestTime;
