import React from "react";
import SocialIcons from "./SocialIcons";
import TechnoBoy3D from "./TechnoBoy3D";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] text-white px-4 gap-8"
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl py-24 text-center mx-auto">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp drop-shadow-lg text-center">
  Hi, I am <span className="text-yellow-400">Kunal</span>
</h1>
  <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp text-center font-medium">Aspiring Data Analysist & developer</p>
  <SocialIcons />
</div>
    </section>
  );
};

export default Hero;
