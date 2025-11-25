import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EducationExperience from "./components/EducationExperience";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <EducationExperience />
      <Workflow />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
