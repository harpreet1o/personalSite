import React from "react";
import project1Image from "../../img/mainPage.png";
import project2Image from "../../img/ecommerceMainpage.png";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="p-6 mb-40">
      <div className="px-6 bg-white text-black mb-20">
        <p className="text-2xl text-blue mb-4">Projects</p>
        <p className="text-3xl ">Latest Projects---</p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-16 px-32">
        <div className="relative">
          <div
            className="px-8"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <img src={project1Image} alt="project 1 image" className="w-full" />
          </div>
        </div>
        <div className="px-12">
          <h1 className="text-blue text-2xl mb-8">1. Music Player App</h1>
          <p className="text-lg mb-4">
            This music app features a Google authentication login. After logging
            in, users can filter and listen to their favorite songs, which are
            added to their library. The dashboard allows users to create new
            artists, albums, and songs. The app utilizes the audioplayer5
            library for playing songs.
          </p>
          <div className="text-lg cursor-pointer justify-between flex items-center text-white font-semibold py-2 px-4 rounded-full bg-black transition duration-300 ease-in-out hover:bg-blue max-w-40">
            <span>Code</span>
            <FaGithub className="inline" />
          </div>
        </div>

        <div className="px-12">
          <h1 className="text-blue text-2xl mb-8">2. Ecommerce Store</h1>
          <p className="text-lg mb-4">
            It features a main page displaying the latest arrivals, updated via
            the admin page. There's a section highlighting popular women's
            items, showcasing the last two stored items tagged as women. Users
            can log in to store checkout items locally, avoiding the need to log
            in repeatedly for checkout. The men's page showcases men's clothing
            and vice versa. The admin page allows for item addition and
            deletion.
          </p>
          <div className="text-lg flex items-center justify-between cursor-pointer text-white font-semibold py-2 px-4 rounded-full bg-black transition duration-300 ease-in-out hover:bg-blue max-w-40">
            <span>Code</span>
            <FaGithub className="inline" />
          </div>
        </div>
        <div className="relative">
          <div
            className="px-8"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <img src={project2Image} alt="project 2 image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
