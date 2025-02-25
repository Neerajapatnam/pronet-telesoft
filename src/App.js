import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import CTA from "./components/cta";
import Footer from "./components/footer";

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Hero, null),
    React.createElement(About, null),
    React.createElement(Services, null),
    React.createElement(Features, null),
    React.createElement(CTA, null),
    React.createElement(Footer, null) // 👈 Add Footer Section
  );
};

export default App;
