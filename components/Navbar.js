"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Scroll background logic
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#050d1f]/80 backdrop-blur-xs" : "bg-transparent"}`}>

            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-2xl md:text-3xl hover:text-cyan-300 transition cursor-pointer">
                        Team Studio
                    </span>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden text-white text-2xl">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button onClick={() => scrollToSection("hero")} className="text-white font-bold hover:text-cyan-300 transition cursor-pointer">Home</button>
                    <button onClick={() => scrollToSection("team")} className="text-white font-bold hover:text-cyan-300 transition cursor-pointer">Team</button>
                    <button onClick={() => scrollToSection("projects")} className="text-white font-bold hover:text-cyan-300 transition cursor-pointer">Projects</button>
                    <button onClick={() => scrollToSection("contact")} className="text-white font-bold hover:text-cyan-300 transition cursor-pointer">Contact</button>
                    <button onClick={() => scrollToSection("contact")} className="bg-cyan-400 text-black px-4 py-2 rounded-xl hover:bg-cyan-300 hover:cursor-pointer hover:scale-110 transition duration-300 cursor-pointer">Get Started</button>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 pb-5 pt-2 bg-[#050d1f]/95 backdrop-blur-xl">
                    <a onClick={() => { scrollToSection("hero"); setMenuOpen(false); }} href="#hero" className="text-white font-medium hover:text-cyan-300">Home</a>
                    <a onClick={() => { scrollToSection("team"); setMenuOpen(false); }} href="#team" className="text-white font-medium hover:text-cyan-300">Team</a>
                    <a onClick={() => { scrollToSection("projects"); setMenuOpen(false); }} href="#projects" className="text-white font-medium hover:text-cyan-300">Projects</a>
                    <a onClick={() => { scrollToSection("contact"); setMenuOpen(false); }} href="#contact" className="text-white font-medium hover:text-cyan-300">Contact</a>
                    <a onClick={() => { scrollToSection("contact"); setMenuOpen(false); }} href="#contact" className="bg-cyan-400 text-black px-4 py-2 rounded-xl hover:bg-cyan-300 hover:scale-105 transition">
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
