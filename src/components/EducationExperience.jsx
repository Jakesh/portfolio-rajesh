import React from "react";

const EducationExperience = () => {
  return (
    <section className="bg-[#1b1b1f] text-white py-20" id="experience">
      <div className="container mx-auto px-4">
      {/* ====== EDUCATION + EXPERIENCE CONTAINER ====== */}
      {/* ====== EDUCATION + EXPERIENCE CONTAINER (Option 2 – Card + Timeline) ====== */}
      <div className="relative mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#2a2a30] shadow-2xl">

        {/* Left - Education */}
        <div className="w-full md:w-1/2 p-8 space-y-6 text-black relative bg-[linear-gradient(to_bottom,#EAB308_0%,#F5E98F_50%,#ffffff_100%)] md:bg-[linear-gradient(to_right,#EAB308_0%,#F5E98F_50%,#ffffff_100%)]">

          {/* Title */}
          <h3 className="text-2xl font-extrabold tracking-wide">Education</h3>

          {/* CARD 1 */}
          <div className="w-[60%] bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/30">
            <h4 className="font-bold text-lg">PUC</h4>
            <p className="text-sm opacity-90">Kendriya Vidyalaya Mysuru | 2012 - 14</p>
          </div>

          {/* CARD 2 */}
          <div className="w-[60%] bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/30">
            <h4 className="font-bold text-lg">BCA</h4>
            <p className="text-sm opacity-90">Amrita School of Arts and Sciences | 2014 - 17</p>
          </div>

          {/* CARD 3 */}
          <div className="w-[60%] bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/30">
            <h4 className="font-bold text-lg">Multimedia</h4>
            <p className="text-sm opacity-90">Aniframes | 2017 - 18</p>
          </div>
        </div>

        {/* Right - Experience */}
        <div
          className="
            w-full md:w-1/2 p-8 space-y-6 bg-[linear-gradient(to_top,#EAB308_0%,#F5E98F_50%,#ffffff_100%)]  md:bg-[linear-gradient(to_left,#EAB308_0%,#F5E98F_50%,#ffffff_100%)] text-black
            text-left md:text-right
          "
        >
          <h3 className="text-2xl font-extrabold tracking-wide mb-3">Experience</h3>

          {/* TIMELINE WRAPPER */}
          <div
            className="
              border-l-2 border-gray-300 pl-6 space-y-8
              md:border-r-2 md:border-l-0 md:pr-6
            "
          >
            {/* Timeline Item 1 */}
            <div className="relative pl-4 md:pl-0 md:pr-4">
              {/* Dot */}
              <div
                className="
                  absolute top-1.5 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white
                  -left-[14px]
                  md:left-auto md:-right-[14px]
                "
              ></div>

              <h4 className="font-semibold text-lg">Graphic Designer</h4>
              <p className="text-sm opacity-80">Global Buzz | 2019 - 22</p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-4 md:pl-0 md:pr-4">
              {/* Dot */}
              <div
                className="
                  absolute top-1.5 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white
                  -left-[14px]
                  md:left-auto md:-right-[14px]
                "
              ></div>

              <h4 className="font-semibold text-lg">Creative Head</h4>
              <p className="text-sm opacity-80">Global Buzz | 2022 - Present</p>
            </div>
          </div>
        </div>

        {/* Middle Overlapping Image */}
        <div
          className="
            absolute
            right-2 md:right-auto
            top-1/2 -translate-y-1/2
            md:left-1/2 md:top-4/5
            md:-translate-x-1/2 md:-translate-y-[60%]
            z-20
            max-[500px]:hidden
          "
        >
          <img
            src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
            alt="Profile Illustration"
            className="w-44 sm:w-56 md:w-72 lg:w-65 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,.45)]"
          />
        </div>
      </div>


      {/* Responsive adjustments for small screens */}
      {/* <div className="mt-10 max-w-6xl mx-auto text-center md:hidden">
        <img
          src="https://i.postimg.cc/1tPtsbhW/BANNER-IMAGE-1.png"
          alt="Profile Illustration"
          className="w-40 mx-auto mb-6"
        />
      </div> */}

      {/* ====== SKILLS SECTION ====== */}
      <div className="container mt-16 mx-auto" id="skills">
        <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">
            My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 justify-items-center md:justify-items-start">
          {/* Skill 1 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
              alt="Photoshop"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Photoshop</p>
            <input type="range" value="80" readOnly className="w-full accent-yellow-500" />
          </div>
          
          {/* Skill 2 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://freebiesupply.com/wp-content/uploads/2022/02/coreldraw-logo.png"
              alt="Corel Draw"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Corel Draw</p>
            <input type="range" value="90" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png"
              alt="Illustrator"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Illustrator</p>
            <input type="range" value="75" readOnly className="w-full accent-yellow-500" />
          </div>
          
          {/* Skill 4 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968525.png"
              alt="Premier Pro"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Premier Pro</p>
            <input type="range" value="85" readOnly className="w-full accent-yellow-500" />
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center w-full max-w-[150px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Figma"
              className="h-12 mb-3"
            />
            <p className="font-medium mb-2">Figma</p>
            <input type="range" value="20" readOnly className="w-full accent-yellow-500" />
          </div>
        </div>
      </div>
       </div>
    </section>
  );
};

export default EducationExperience;
