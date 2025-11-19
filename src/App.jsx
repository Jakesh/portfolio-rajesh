import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EducationExperience from "./components/EducationExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <EducationExperience />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
