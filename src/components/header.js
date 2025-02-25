import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-10"
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-blue-800">Pronet Telesoft</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
