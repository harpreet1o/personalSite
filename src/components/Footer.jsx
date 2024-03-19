import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer() {
  const email = "harpreetx01@outlook.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-between gap-x-8 px-12 py-12 bg-black text-white text-lg border-t border-white">
        <h1 className="font-logo text-xl  ml-8 text-blue">Harpreet Singh</h1>
        <div>
          <h2 className="text-xl mb-8">Profiles</h2>
          <div className="flex gap-4 items-center mb-4 cursor-pointer">
            <a
              href="https://www.instagram.com/harpreet1o/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center"
            >
              <FaInstagram className="text-blue" />
              <span className=" transition duration-300 ease-in-out hover:bg-blue">
                Intsagram
              </span>
            </a>
          </div>
          <div className="flex gap-4 items-center mb-4 cursor-pointer">
            <a
              href="www.linkedin.com/in/harpreet-singh-31a912258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center"
            >
              <FaLinkedinIn className="text-blue" />
              <span className=" transition duration-300 ease-in-out hover:bg-blue">
                LinkedIn
              </span>
            </a>
          </div>
          <div className="flex gap-4 items-center mb-4 cursor-pointer">
            <a
              href="https://github.com/harpreet1o"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center"
            >
              <FaGithub className="text-blue" />
              <span className=" transition duration-300 ease-in-out hover:bg-blue">
                GitHub
              </span>
            </a>
          </div>
        </div>
        <div>
          <h1 className="mb-8 text-xl">Contact Me</h1>
          <div className="flex gap-4 items-center mb-4">
            <IoCall className="text-blue" />
            <p>+7786808702</p>
          </div>
          <div
            className="flex gap-4 items-center mb-4 cursor-pointer"
            onClick={handleEmailClick}
          >
            <IoIosMail className="text-blue" />
            <p className=" transition duration-300 ease-in-out hover:bg-blue">
              harpreetx01@outlook.com
            </p>
          </div>
          <div className="flex gap-4 items-center mb-4 ">
            <p className="mr-4"> </p>
            <p>Based In Vancouver,BC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
