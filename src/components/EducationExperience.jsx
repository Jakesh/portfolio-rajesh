import React from "react";

const EducationExperience = () => {
  return (
    <section className="bg-[#1b1b1f] text-white py-20 px-6">
      {/* ====== EDUCATION + EXPERIENCE CONTAINER ====== */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#2a2a30] shadow-lg">

        {/* Left - Education */}
        <div className="bg-[#EAB308] text-black w-full md:w-1/2 p-8 space-y-4 z-10">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div>
            <h4 className="font-semibold">B.Sc (Computer Science)</h4>
            <p className="text-sm">University of Mysore | 2020</p>
          </div>
          <div>
            <h4 className="font-semibold">PUC (Science Stream)</h4>
            <p className="text-sm">Karnataka PU Board | 2017</p>
          </div>
          <div>
            <h4 className="font-semibold">SSLC</h4>
            <p className="text-sm">State Board | 2015</p>
          </div>
        </div>

        {/* Right - Experience */}
        <div className="bg-white text-black w-full md:w-1/2 p-8 space-y-4 z-10">
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div>
            <h4 className="font-semibold">Front-End Developer</h4>
            <p className="text-sm">Techcentrix | 2021 - 2023</p>
          </div>
          <div>
            <h4 className="font-semibold">Creative Head</h4>
            <p className="text-sm">Freelance | 2023 - Present</p>
          </div>
        </div>

        {/* Middle - Overlapping Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] z-20">
          <img
            src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
            alt="Profile Illustration"
            className="w-56 md:w-64 object-contain"
          />
        </div>
      </div>

      {/* Responsive adjustments for small screens */}
      <div className="mt-10 max-w-6xl mx-auto text-center md:hidden">
        <img
          src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
          alt="Profile Illustration"
          className="w-40 mx-auto mb-6"
        />
      </div>

      {/* ====== SKILLS SECTION ====== */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 text-center">My Skills</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 justify-items-center">
          {/* Skill 1 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">React</p>
            <input type="range" value="90" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Node.js</p>
            <input type="range" value="80" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              alt="Git"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Git</p>
            <input type="range" value="85" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="TypeScript"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">TypeScript</p>
            <input type="range" value="75" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="Figma"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Figma</p>
            <input type="range" value="70" readOnly className="w-full accent-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
