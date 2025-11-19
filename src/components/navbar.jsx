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
                    <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Testimonial</li>
                    <li className="hover:text-yellow-400 cursor-pointer">About</li>
                </ul>

                {/* Right Side Icons */}
                <div className="hidden md:flex items-center gap-6">
                    <FaGlobe className="cursor-pointer hover:text-yellow-400" />
                    <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
                </div>

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

                    {/* Social icons in mobile menu */}
                    <div className="flex justify-center gap-6 mt-4">
                        <FaGlobe className="cursor-pointer hover:text-yellow-400" />
                        <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
