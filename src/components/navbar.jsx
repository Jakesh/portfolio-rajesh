import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger & close icons
import { FaLinkedinIn, FaGlobe } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                    <span className="text-xl font-bold">Rajesh</span>
                </div>

                {/* Nav Links - Desktop */}
                <ul className="hidden md:flex gap-8 font-medium">
                    <li className="hover:text-yellow-400 cursor-pointer"><a href="#services">Services</a></li>
                    <li className="hover:text-yellow-400 cursor-pointer"><a href="#experience">Experience</a></li>
                    <li className="hover:text-yellow-400 cursor-pointer"> <a href="#skills">Skills</a></li>
                    <li className="hover:text-yellow-400 cursor-pointer"><a href="#workflow">Workflow</a></li>
                </ul>        

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-yellow-400"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
                    <ul className="flex flex-col gap-4 text-center font-medium">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Testimonial</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
