import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Showcase = () => {
  const [active, setActive] = useState("left"); // left | right

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Mobile Buttons */}
          <div className="flex lg:hidden justify-center mt-6 gap-4">
            <button
              onClick={() => setActive("left")}
              className={`px-4 py-2 rounded-lg ${active === "left" ? "bg-yellow-500 text-black" : "bg-white/10"}`}
            >
              What Makes Me Stand Out
            </button>
            <button
              onClick={() => setActive("right")}
              className={`px-4 py-2 rounded-lg ${active === "right" ? "bg-yellow-500 text-black" : "bg-white/10"}`}
            >
              My Recent Work
            </button>
          </div>
          {/* LEFT PANEL */}
          <div
            className={`
              relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500
              ${active === "left" ? "lg:w-[70%] w-full" : "lg:w-[30%] w-full opacity-50"}
            `}
          >
            {/* Toggle Button */}
            <button
              onClick={() => setActive("right")}
              className={`hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all ${
                active === "right" && "opacity-0 pointer-events-none"
              }`}
            >
              <FaArrowRight />
            </button>

            <h2 className="text-2xl font-bold mb-4">What Makes Me Stand Out</h2>

            {/* VIDEO WRAPPER */}
            <div
              className={`
                w-full h-64 rounded-xl overflow-hidden relative transition-all
                ${active !== "left" ? "pointer-events-none blur-sm" : ""}
              `}
            >
              {/* Dummy video */}
              <video
                className="w-full h-full object-cover"
                controls={active === "left"}
                muted
              >
                <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
              </video>

              {/* Overlay block clicks when disabled */}
              {active !== "left" && (
                <div className="absolute inset-0 bg-black/10"></div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className={`
              relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500
              ${active === "right" ? "lg:w-[70%] w-full" : "lg:w-[30%] w-full opacity-50"}
            `}
          >
            {/* Toggle Button */}
            <button
              onClick={() => setActive("left")}
              className={`hidden lg:flex absolute top-1/2 -left-4 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all ${
                active === "left" && "opacity-0 pointer-events-none"
              }`}
            >
              <FaArrowLeft />
            </button>

            <h2 className="text-2xl font-bold mb-4">My Recent Work</h2>

            {/* VIDEO WRAPPER */}
            <div
              className={`
                w-full h-64 rounded-xl overflow-hidden relative transition-all
                ${active !== "right" ? "pointer-events-none blur-sm" : ""}
              `}
            >
              {/* Dummy video */}
              <video
                className="w-full h-full object-cover"
                controls={active === "right"}
                muted
              >
                <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
              </video>

              {/* Overlay to block interactions */}
              {active !== "right" && (
                <div className="absolute inset-0 bg-black/10"></div>
              )}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Showcase;
