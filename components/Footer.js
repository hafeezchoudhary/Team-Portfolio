
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa"; // Logo icon

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-10">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-white font-bold text-lg">Team Studio</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-500">
            We are a passionate team of web developers crafting modern,
            responsive, and high-performance websites that blend creativity
            with functionality. Our goal is to deliver digital experiences that
            inspire and engage.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-xl">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="#team" className="hover:text-cyan-400 transition-colors">Team</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="hover:text-cyan-400 transition-colors">Website Development</li>
            <li className="hover:text-cyan-400 transition-colors">UI/UX Design</li>
            <li className="hover:text-cyan-400 transition-colors">E-commerce Solutions</li>
            <li className="hover:text-cyan-400 transition-colors">SEO Optimization</li>
            <li className="hover:text-cyan-400 transition-colors">Maintenance & Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-xs text-gray-500">
        <p>© 2025 Secure Haven Team. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
