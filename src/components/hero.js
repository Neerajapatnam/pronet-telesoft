import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-blue-800 text-white py-20 pt-16  text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container pt-20 mx-auto px-6"
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Pronet Telesoft
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Your trusted partner in telecommunications and software solutions.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
