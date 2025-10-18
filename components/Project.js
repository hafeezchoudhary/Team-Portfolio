"use client";
import { useState } from "react";
import { IoGameControllerSharp, IoLogoJavascript } from "react-icons/io5";
import { FaRegFile, FaDatabase, FaNodeJs } from "react-icons/fa";
import { LuShield } from "react-icons/lu";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";

const projects = [
  {
    title: "Student Management system",
    type: "Mini Project",
    description:
      "A C program to add, search, update, and delete student records.Stores essential details for up to 60 students.",
    features: ["Insert", "Search", "Update"],
    tags: ["C Language"],
    icon: <FaDatabase className="text-cyan-400 text-2xl" />,
    codeLink:
      "https://github.com/Hafeez-Choudhary/mini-projects/blob/main/C/Student%20management.c",
  },
  {
    title: "Student Management system using File system",
    type: "Mini Project",
    description:
      "A C++ file-handling program to add, view, and search student records, storing details in a text file for persistence.",
    features: ["Add", "View", "Search", "Store"],
    tags: ["Cpp Language using File Handling"],
    icon: <FaRegFile className="text-cyan-400 text-2xl" />,
    codeLink:
      "https://github.com/Hafeez-Choudhary/mini-projects/blob/main/CPP/project.cpp",
  },
  {
    title: "Guess the Number",
    type: "Mini Project",
    description:
      "A Java program where the player guesses a random number between 0 and 100 with hints until correct, showing total attempts.",
    features: ["Generate", "Guess", "Hint", "Count"],
    tags: ["Java"],
    icon: <IoGameControllerSharp className="text-cyan-400 text-2xl" />,
    codeLink:
      "https://github.com/Hafeez-Choudhary/mini-projects/blob/main/Java/game.java",
  },
];

const featuredProjects = [
  {
    title: "Password Manager",
    icon: <LuShield className="text-cyan-400" />,
    description:
      "A secure web application that enables users to store, manage, and retrieve passwords safely with built-in login and authentication. All credentials are encrypted before storage, ensuring data protection. Users can add, edit, delete, and search passwords through a clean and responsive dashboard, combining security with ease of use.",
    features: ["Secure password storage with encryption", "User authentication for data protection", "Responsive dashboard for easy management", "Add, edit, delete, and search passwords"],
    technologies: [
      { icon: <RiNextjsFill className="text-white w-5" />, name: "Nextjs" },
      { icon: <SiTailwindcss className="text-sky-500" />, name: "Tailwind css" },
      { icon: <SiMongodb className="text-green-500" />, name: "Mongodb" },
      { icon: <IoLogoJavascript className="text-yellow-400 w-5" />, name: "Javascript" },
      { icon: <FaNodeJs className="text-green-500 w-5" />, name: "node js" }
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBkqLmGoB7b_A8uUyTI25VBHQ-AkZ92KoFA&s",
    sourceCodeLink: "https://github.com/hafeezchoudhary/Password-Manager",
    liveDemoLink: "#"
  },
  {
    title: "Weather App",
    icon: <TiWeatherPartlySunny className="text-cyan-400" />,
    description:
      "A weather application that provides real-time weather updates, forecasts, and location-based weather information through a user-friendly interface. Users can search for current weather conditions and a 7-day forecast for any city, with data presented in a clean and responsive design.",
    features: ["Current weather information", "7-day weather forecast", "Location-based weather updates", "Responsive design for mobile and desktop"],
    technologies: [
      { icon: <RiNextjsFill className="text-white w-5" />, name: "Nextjs" },
      { icon: <SiTailwindcss className="text-sky-500" />, name: "Tailwind css" },
      { icon: <IoLogoJavascript className="text-yellow-400 w-5" />, name: "Javascript" }
    ],
    image: "/weatherapp.png",
    sourceCodeLink: "https://github.com/hafeezchoudhary/Weather-App",
    liveDemoLink: "https://cloudyverse.vercel.app/"
  }
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevFeaturedSlide = () =>
    setFeaturedIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  const nextFeaturedSlide = () =>
    setFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);

  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center px-4 py-10 bg-gradient-to-br from-[#0b1222] via-[#090d1c] to-[#03071a]"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-cyan-400 mb-6 mt-10">
            Our Projects
          </h1>
          <p className="text-slate-400 text-xl sm:text-xl md:text-xl max-w-4xl mx-auto px-2">
            Explore our collection of innovative solutions. Each project showcases
            our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        {/* Featured Projects Slider */}
        <div className="relative w-full max-w-7xl mt-10 min-h-[400px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-[#0c1322] text-white rounded-2xl shadow-[0_0_5px_#00bfff99] p-6 w-full flex flex-col lg:flex-row gap-8">
                    {/* Left - Image */}
                    <div className="flex-1 relative">
                      <span className="absolute top-3 left-3 bg-cyan-400 text-black font-semibold px-3 py-1 rounded-full text-sm">
                        Project
                      </span>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-lg w-full h-full"
                      />
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold flex items-center gap-2">
                        {project.icon}
                        {project.title}
                      </h2>
                      <p className="text-gray-500 mt-3 leading-relaxed lg:text-lg">
                        {project.description}
                      </p>

                      <h3 className="text-white font-semibold mt-6">Key Features</h3>
                      <ul className="grid grid-col-2 text-gray-500 text-sm lg:text-lg font-semibold mt-2 list-disc list-inside space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex mt-10 text-xl">Technologies</div>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-800 px-3 py-1 rounded-full flex items-center gap-2">
                            {tech.icon} {tech.name}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4 mt-6">
                        <button className="bg-cyan-400 text-black font-medium px-5 py-2 sm:px-5 sm:py-2 rounded-lg hover:shadow-cyan-400 hover:shadow-xl/20 transition duration-500 hover:scale-105 cursor-pointer">
                          <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </button>
                        <button className="text-white border border-slate-800 font-medium px-3 py-2 sm:px-5 sm:py-2 rounded-lg hover:shadow-cyan-400 hover:shadow-xl/20 transition duration-300 hover:scale-105 hover:bg-cyan-950 cursor-pointer text-center">
                          &lt;&gt; <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevFeaturedSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-10"
          >
            <MdNavigateBefore />
          </button>
          <button
            onClick={nextFeaturedSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-10"
          >
            <MdNavigateNext />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`w-3 h-3 rounded-full ${index === featuredIndex ? 'bg-cyan-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {/* Desktop Grid (unchanged) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl w-full mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Mobile + Tablet Carousel */}
        <div className="block lg:hidden relative w-full max-w-max overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full px-2">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <MdNavigateBefore />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </>
  );
};

// Separate ProjectCard component to avoid repeating code
const ProjectCard = ({ project }) => (
  <div className="bg-gradient-to-b from-[#0d1525] via-[#081021] to-[#0c111a] p-6 rounded-xl shadow-lg hover:shadow-cyan-400 hover:shadow-xl/20 transform transition-transform hover:-translate-y-2 duration-500">
    <div className="flex items-center gap-3 mb-4">
      {project.icon}
      <h2 className="text-xl font-bold text-white">{project.title}</h2>
    </div>
    <p className="text-cyan-400 text-sm font-medium mb-2">{project.type}</p>
    <p className="text-gray-500 text-sm font-semibold mb-4">{project.description}</p>

    <h3 className="text-white font-semibold mb-2">Features</h3>
    <ul className="text-gray-500 text-sm font-semibold mb-4 list-disc list-inside space-y-1">
      {project.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg flex items-center gap-2"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-3 justify-center">
      <button className="bg-cyan-400 text-black font-medium px-5 py-2 sm:px-5 sm:py-2 rounded-lg hover:shadow-cyan-400 hover:shadow-xl/20 transition duration-300 hover:scale-105 cursor-pointer">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          &lt;&gt;Source Code
        </a>
      </button>
    </div>
  </div>
);

export default Project;