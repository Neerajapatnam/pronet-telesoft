import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "bg-white text-gray-700 py-10 shadow-inner" }, // 🔥 Changed to `bg-white`
    React.createElement(
      "div",
      { className: "container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6" },

      // Company Info
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "text-lg font-bold text-blue-800 mb-3" },
          "Pronet Telesoft Pvt Ltd"
        ),
        React.createElement(
          "p",
          { className: "text-sm text-gray-600 leading-relaxed" },
          "Innovating Telecom & Software Solutions for the future."
        )
      ),

      // Quick Links
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "text-lg font-bold text-blue-800 mb-3" },
          "Quick Links"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2" },
          ["Home", "About", "Services", "Contact"].map((item) =>
            React.createElement(
              "li",
              { key: item },
              React.createElement(
                "a",
                {
                  href: `#${item.toLowerCase()}`,
                  className: "hover:text-blue-600 transition duration-300",
                },
                item
              )
            )
          )
        )
      ),

      // Social Media
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "text-lg font-bold text-blue-800 mb-3" },
          "Follow Us"
        ),
        React.createElement(
          "div",
          { className: "flex space-x-4" },
          [
            { href: "#", icon: FaGlobe, label: "Website" },
            { href: "#", icon: FaFacebookF, label: "Facebook" },
            { href: "#", icon: FaTwitter, label: "Twitter" },
            { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }, index) =>
            React.createElement(
              "a",
              {
                key: index,
                href: href,
                className: "text-xl text-gray-600 hover:text-blue-600 transition duration-300",
                "aria-label": label,
              },
              React.createElement(Icon)
            )
          )
        )
      )
    ),

    // Divider
    React.createElement("div", { className: "border-t border-gray-300 my-6" }),

    // Copyright Section
    React.createElement(
      "div",
      { className: "text-center text-sm text-gray-600" },
      "© ", new Date().getFullYear(), " Pronet Telesoft Pvt Ltd. All rights reserved."
    )
  );
};

export default Footer;
