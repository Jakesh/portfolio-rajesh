import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

const Hero = () => {
    return (
        <section className="px-6 py-12">
            {/* Grid layout for larger screens */}
            <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                {/* Left Text Section */}
                <div className="order-1">
                    <h2 className="text-lg text-gray-300">I’m</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        <span className="text-white">Rajesh</span>
                    </h1>
                    <p className="mt-4 text-gray-400">
                        A freelancer who provides services for digital programming and
                        design content needs, for all businesses with more than 10 years of
                        experience.
                    </p>
                </div>

                {/* Image Section (center in large screens, third in mobile) */}
                <div className="order-3 relative md:order-2 flex justify-center mt-20 md:mt-10 lg:mt-0">
                    {/* Circle background */}
                    <div className="absolute -top-10 w-72 h-72 bg-gray-800 rounded-full -z-0"></div>

                    {/* Profile Image */}
                    <img
                        src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
                        alt="Profile"
                        className="relative mx-auto"
                    />
                </div>


                {/* Right Text Section */}
                <div className="order-2 md:order-3">
                    <h3 className="text-lg text-gray-300">Services</h3>
                    <p className="mt-2 text-gray-200 font-medium">
                        Let’s build quality products in programming and design with my
                        services
                    </p>
                    <button className="mt-4 text-yellow-400 hover:underline">
                        show more →
                    </button>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-6 text-gray-400">
                        <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
                        <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
                        <FaPinterestP className="hover:text-yellow-400 cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
