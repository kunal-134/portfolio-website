
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import VideoBackground from "./components/VideoBackground";

const SectionDivider = () => (
  <div className="w-full border-t border-gray-800 my-8 md:my-12" />
);

function App() {
  return (
    <>
      <VideoBackground />
      <div className="min-h-screen text-gray-100 scroll-smooth">
        <Navbar />
        <main>
          <Hero />
          <About />
                    <Services />
                    <Skills />
          <Contact />
          {/* Add Resume, Portfolio, Blog, Contact sections here as needed */}
        </main>
      </div>
    </>
  );
}

export default App;
