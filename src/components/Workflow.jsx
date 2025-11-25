import React from "react";
import {FaLightbulb, FaPencilRuler, FaDraftingCompass} from "react-icons/fa";

const Workflow = () => {
    return (
        <section className="py-16 bg-[#1b1b1f] text-white" id="workflow">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">
                    My Workflow
                </h2>

                {/* Timeline Wrapper */}
                <div className="flex flex-col md:flex-row items-center md:justify-between relative">

                    {/* === HORIZONTAL LINE (only between boxes) === */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 mx-auto w-[66%] h-[3px] bg-white/20 rounded-full"></div>


                    {/* === VERTICAL LINE (only between boxes) === */}
                    <div className="md:hidden absolute top-[16%] bottom-[16%] left-1/2 -translate-x-1/2 w-[3px] bg-white/20 rounded-full"></div>


                    {/* ===== BOX 1 ===== */}
                    <div className="relative flex flex-col items-start md:w-1/3 mb-16 md:mb-0">
                        <div className="w-64 p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">

                            {/* Icon + Title Row */}
                            <div className="flex items-center gap-2 mb-2">
                            <FaLightbulb className="text-yellow-400 text-xl" />
                            <h4 className="text-xl font-semibold">Conceptualize</h4>
                            </div>

                            <p className="text-sm opacity-90">
                            Generate the core idea and define the vision for the project.
                            </p>

                        </div>
                    </div>


                    {/* ===== BOX 2 ===== */}
                    <div className="relative flex flex-col items-center md:w-1/3 mb-16 md:mb-0">
                        <div className="w-64 p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">

                            {/* Icon + Title Row */}
                            <div className="flex items-center gap-2 mb-2">
                            <FaPencilRuler className="text-yellow-400 text-xl" />
                            <h4 className="text-xl font-semibold">Rough Sketch</h4>
                            </div>

                            <p className="text-sm opacity-90">
                            Create basic drafts to outline the structure and flow.
                            </p>

                        </div>
                    </div>


                    {/* ===== BOX 3 ===== */}
                    <div className="relative flex flex-col items-end md:w-1/3 mb-16 md:mb-0">
                        <div className="w-64 p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">

                            {/* Icon + Title Row */}
                            <div className="flex items-center gap-2 mb-2">
                            <FaDraftingCompass className="text-yellow-400 text-xl" />
                            <h4 className="text-xl font-semibold">Design Plotting</h4>
                            </div>

                            <p className="text-sm opacity-90">
                            Transform the concept into a polished, detailed visual layout.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Workflow;
