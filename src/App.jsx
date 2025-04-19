import React from "react";
import "./App.css";
import Nav from "../components/Navbar/Navigation";
import Herosec from "../components/HeroSection/HeroSec";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-zinc-900 text-white relative ">
      <Nav />
      <Herosec />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
