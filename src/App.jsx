// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <Biography />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
