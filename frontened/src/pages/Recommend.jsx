import CropForm from "../componenets/CropForm";
import { motion } from "framer-motion";
import plantGif from "./plant.gif";
import React from "react";

const Recommend = () => {
  return (
    <motion.div
      className="p-6 max-w-half mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-green-700 flex items-center justify-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
      <img
          src={plantGif}
          alt="Crop GIF"
          className="w-20 h-20 mt-0.1"
        />
        Recommend a Crop
      </motion.h2>

      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <CropForm />
      </motion.div>
    </motion.div>
  );
};

export default Recommend;
