"use client";
import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdColorLens } from "react-icons/md"; 


const Home = () => {

    const features = [
        {
            icon: <FaCode className="text-cyan-400 text-4xl mb-4" />,
            title: "Full-Stack Development",
            description: "Modern web applications with cutting-edge technologies",
        },
        {
            icon: <MdColorLens className="text-cyan-400 text-4xl mb-4" />,
            title: "Frontend Creativity",
            description: "Engaging user interfaces with responsive, modern design",
        },
        {
            icon: <FaUsers className="text-cyan-400 text-4xl mb-4" />,
            title: "Team Excellence",
            description: "Collaborative approach to innovative solutions",
        },
    ];

    return (
        <>
            <div id="hero" className="flex flex-col items-center px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#0a0f1f] to-[#020617]">
                {/* Title and Paragraph */}
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-cyan-400 mb-6 mt-15">
                        Meet our Elite Team
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-5xl mx-auto px-2">
                        A collective of passionate innovators, creative minds, and technical experts dedicated to delivering exceptional results and pushing boundaries in everything we do.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="bg-cyan-400 text-black font-medium px-6 py-3 sm:px-10 sm:py-4 rounded-2xl hover:shadow-cyan-400 hover:shadow-xl/20 transition duration-300 hover:scale-105 cursor-pointer">
                        &lt;&gt; View our work
                    </button>
                    <button onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })} className="text-white border border-slate-800 font-medium px-6 py-3 sm:px-10 sm:py-4 rounded-2xl hover:shadow-cyan-400 hover:shadow-xl/20 transition duration-300 hover:scale-105 hover:bg-cyan-950 cursor-pointer">
                        Meet the Team
                    </button>
                </div>

                <div className="flex items-center mt-15">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[linear-gradient(180deg,#0a111e_0%,#070e1d_40%,#060d1d_70%,#0f151f_100%)] hover:scale-105 transition-all duration-300 rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-500/20"
                            >
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>

                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center mt-5 min-h-[80px]">
                    <div className="bounce-arrow">
                        <FiChevronDown className="text-cyan-400 text-4xl" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;
