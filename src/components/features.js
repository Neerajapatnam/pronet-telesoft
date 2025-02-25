import React from "react";

const Features = () => {
  const features = [
    {
      title: "Advanced Technology",
      description: "We use cutting-edge telecom & software solutions to ensure high performance.",
      icon: "🚀",
    },
    {
      title: "Enterprise-Grade Security",
      description: "Our systems are built with top-tier security to protect your business data.",
      icon: "🔒",
    },
    {
      title: "Scalability",
      description: "Easily scale your infrastructure as your business grows, without limitations.",
      icon: "📈",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure seamless operation and business continuity.",
      icon: "🛠️",
    },
  ];

  return React.createElement(
    "section",
    { className: "bg-gray-100 py-20" },
    React.createElement(
      "div",
      { className: "container mx-auto px-6 text-center" },

      // Section Title
      React.createElement(
        "h2",
        { className: "text-4xl font-extrabold text-blue-900 mb-4" },
        "Why Choose Us?"
      ),
      React.createElement(
        "p",
        { className: "text-lg text-gray-600 mb-12" },
        "Explore the key features that make Pronet Telesoft stand out."
      ),

      // Features Grid
      React.createElement(
        "div",
        {
          className: "grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto",
        },
        features.map((feature, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className:
                "bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500",
            },
            React.createElement(
              "div",
              { className: "text-5xl mb-4" },
              feature.icon
            ),
            React.createElement(
              "h3",
              { className: "text-2xl font-bold text-blue-900 mb-2" },
              feature.title
            ),
            React.createElement(
              "p",
              { className: "text-gray-600" },
              feature.description
            )
          )
        )
      )
    )
  );
};

export default Features;
