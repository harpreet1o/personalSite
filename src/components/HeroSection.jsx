import React from "react";
import logo from "../assets/heroimageclearbg.png";

function scrollToSection(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

function HeroSection() {
  const handleDownloadCV = () => {
    // Implement logic to download CV
    // For example, you can redirect to a link where the CV is hosted
    window.open(
      "https://drive.google.com/drive/folders/1W0tr46U9tPOeJk38UGVD-nDu32dIGzl6?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="bg-black p-6 text-white">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-2 gap-x-24 gap-y-12 items-center mt-24">
        <div className="flex flex-col">
          <p className="text-blue text-2xl my-4">Welcome.</p>
          <p className="text-lg my-4">
            My name is Harpreet Singh, I am Web Developer aiming to learn full
            stack. Consistently working on new projects. As learning is a never
            ending process...
          </p>
          <div className="flex gap-4 items-center mb-4">
            <button
              className="text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue"
              onClick={() => scrollToSection("#projects")}
            >
              Projects
            </button>
            <button
              className="text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="hero image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
