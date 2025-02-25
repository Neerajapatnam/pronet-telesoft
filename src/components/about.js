import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-16"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="https://t4.ftcdn.net/jpg/02/11/39/51/360_F_211395193_ILTeSLFdGh1LIVxYwCcjGLcUCDBxiwTr.jpg"
            alt="About Pronet Telesoft"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Pronet Telesoft Pvt Ltd
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialize in cutting-edge telecommunications & software solutions.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
