import React, { useState } from "react";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return React.createElement(
    "div",
    null,
    // CTA Button to Open Modal
    React.createElement(
      "button",
      {
        onClick: () => setIsOpen(true),
        className:
          "bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-300 transition duration-300",
      },
      "Get in Touch"
    ),

    // Modal Overlay
    isOpen &&
      React.createElement(
        "div",
        {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
          onClick: () => setIsOpen(false), // Close modal when clicking outside
        },

        // Modal Content
        React.createElement(
          "div",
          {
            className:
              "bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative",
            onClick: (e) => e.stopPropagation(), // Prevent closing when clicking inside modal
          },

          // Close Button
          React.createElement(
            "button",
            {
              onClick: () => setIsOpen(false),
              className:
                "absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl",
            },
            "✖"
          ),

          // Modal Title
          React.createElement(
            "h2",
            { className: "text-2xl font-extrabold text-blue-900 mb-4 text-center" },
            "Contact Us"
          ),

          // Contact Form
          React.createElement(
            "form",
            {
              className: "space-y-4",
              onSubmit: (e) => e.preventDefault(),
            },

            // Name Input
            React.createElement("input", {
              type: "text",
              placeholder: "Your Name",
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true,
            }),

            // Email Input
            React.createElement("input", {
              type: "email",
              placeholder: "Your Email",
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true,
            }),

            // Message Input
            React.createElement("textarea", {
              placeholder: "Your Message",
              rows: "4",
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true,
            }),

            // Submit Button
            React.createElement(
              "button",
              {
                type: "submit",
                className:
                  "bg-blue-900 text-white font-bold py-3 px-6 rounded-lg w-full shadow-lg hover:bg-blue-700 transition duration-300",
              },
              "Send Message"
            )
          )
        )
      )
  );
};

export default ContactModal;
