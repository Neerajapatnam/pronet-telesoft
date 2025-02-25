import React from "react";

const Services = () => {
  // Define service items
  const services = [
    {
      title: "Telecom Solutions",
      description:
        "Advanced walkie-talkies and seamless communication solutions tailored for businesses.",
      icon: "📡",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions to streamline operations and enhance business productivity.",
      icon: "💻",
    },
    {
      title: "Cloud & Security",
      description:
        "Secure cloud-based infrastructure with top-notch cybersecurity solutions.",
      icon: "☁️",
    },
    {
      title: "AI & Automation",
      description:
        "Cutting-edge AI-powered tools and automation for modern businesses.",
      icon: "🤖",
    },
  ];

  return React.createElement(
    "section",
    { className: "bg-white py-20" },
    React.createElement(
      "div",
      { className: "container mx-auto px-6 text-center" },

      // Section Title
      React.createElement(
        "h2",
        { className: "text-4xl font-extrabold text-blue-900 mb-4" },
        "Our Services"
      ),
      React.createElement(
        "p",
        { className: "text-lg text-gray-600 mb-12" },
        "We offer a range of high-quality services to empower businesses with cutting-edge technology."
      ),

      // Services Grid
      React.createElement(
        "div",
        {
          className:
            "grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto",
        },
        services.map((service, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className:
                "bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-500",
            },
            React.createElement(
              "div",
              { className: "text-5xl mb-4" },
              service.icon
            ),
            React.createElement(
              "h3",
              { className: "text-2xl font-bold text-blue-900 mb-2" },
              service.title
            ),
            React.createElement(
              "p",
              { className: "text-gray-600" },
              service.description
            )
          )
        )
      )
    )
  );
};

export default Services;
