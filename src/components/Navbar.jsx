// Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header className="navbar-container fixed top-0 left-0 w-full bg-black text-white p-6 z-50">
      <nav className="flex justify-between items-center">
        <h1 className="font-logo text-xl text-blue cursor-pointer">
          <a href="#hero">Harpreet Singh</a>
        </h1>
        <ul className="flex gap-6 text-lg">
          <li className="font-medium hover:text-blue">
            <a href="#projects">Projects</a>
          </li>
          <li className="font-medium hover:text-blue">
            <a href="#about">About Me</a>
          </li>
          <li className="font-medium hover:text-blue">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
