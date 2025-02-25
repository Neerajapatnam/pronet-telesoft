import React from "react";
import ContactModal from "./contactModal"; // Import Contact Modal

const CTA = () => {
  return React.createElement(
    "section",
    { className: "bg-blue-900 text-white py-20 text-center" },
    React.createElement(
      "div",
      { className: "container mx-auto px-6" },

      // Section Title
      React.createElement(
        "h2",
        { className: "text-4xl font-extrabold mb-4" },
        "Ready to Transform Your Business?"
      ),
      React.createElement(
        "p",
        { className: "text-lg text-gray-300 mb-8 max-w-2xl mx-auto" },
        "Join hands with Pronet Telesoft to experience cutting-edge telecom and software solutions designed for success."
      ),

      // Contact Modal Button (Instead of a separate contact page)
      React.createElement(ContactModal, null)
    )
  );
};

export default CTA;
