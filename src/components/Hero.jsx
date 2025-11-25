import React from "react";
import { FaFileAlt, FaFolderOpen } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="py-12">
            {/* Grid layout for larger screens */}
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-4 items-center text-center md:text-left">
                {/* Left Text Section */}
                <div className="order-1">
                    <h2 className="text-lg text-gray-300">I’m</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        <span className="text-white">Rajesh</span>
                    </h1>
                    <p className="mt-4 text-gray-400">
                        A seasoned graphic
                        designer with a passion for bringing
                        creative visions to life. With a robust
                        four years Of experience in the
                        dynamic field of graphic design, I
                        have honed my skills and expertise to
                        become a standout professional in
                        the industry.
                    </p>
                </div>

                {/* Image Section (center in large screens, third in mobile) */}
                <div className="order-3 relative md:order-2 flex justify-center mt-20 md:mt-10 lg:mt-0">

                    {/* Circle background */}
                    <div className="absolute -top-10 w-72 h-72 bg-gray-800 rounded-full -z-0 
                                    shadow-[0px_0px_40px_10px_rgba(0,0,0,0.6)]">
                    </div>

                    {/* Profile Image */}
                    <img
                        src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
                        alt="Profile"
                        className="
                            relative mx-auto 
                            drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] 
                        "
                    />
                </div>


                {/* Right Text Section */}
                <div className="order-2 md:order-3">
                    <h3 className="text-lg text-gray-300 font-bold">Services</h3>
                    <p className="mt-2 text-gray-400">
                        I help brands and businesses stand out with high-quality creative solutions, including Print Design, Digital Marketing, Branding, Video Editing, and Photography.
                    </p>
                    <div className="flex flex-col flex-col lg:flex-row lg:items-center sm:gap-4">
                        <button
                        className="
                            mt-4 px-5 py-2 
                            bg-yellow-500 text-black 
                            rounded-full font-medium 
                            flex items-center gap-2 
                            hover:bg-yellow-400 transition
                        "
                        >
                        <FaFileAlt /> View My Resume
                        </button>
                        <button
                        className="
                            mt-4 px-5 py-2 
                            bg-yellow-500 text-black 
                            rounded-full font-medium 
                            flex items-center gap-2 
                            hover:bg-yellow-400 transition
                        "
                        >
                        <FaFolderOpen /> View All Works
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
